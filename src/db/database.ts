const DB_NAME = 'warmspace-db'
const DB_VERSION = 1

const STORE_NAMES = {
  settings: 'settings',
  meta: 'meta',
} as const

type StoreName = (typeof STORE_NAMES)[keyof typeof STORE_NAMES]

async function openDatabase() {
  return await new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => reject(request.error ?? new Error('Failed to open IndexedDB'))
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = () => {
      const database = request.result

      if (!database.objectStoreNames.contains(STORE_NAMES.settings)) {
        database.createObjectStore(STORE_NAMES.settings)
      }

      if (!database.objectStoreNames.contains(STORE_NAMES.meta)) {
        database.createObjectStore(STORE_NAMES.meta)
      }
    }
  })
}

async function withStore<T>(
  storeName: StoreName,
  mode: IDBTransactionMode,
  action: (store: IDBObjectStore) => IDBRequest<T>,
) {
  const database = await openDatabase()

  return await new Promise<T>((resolve, reject) => {
    const transaction = database.transaction(storeName, mode)
    const store = transaction.objectStore(storeName)
    const request = action(store)

    transaction.oncomplete = () => {
      database.close()
      resolve(request.result)
    }

    transaction.onerror = () => {
      database.close()
      reject(transaction.error ?? new Error(`Transaction failed for "${storeName}"`))
    }

    transaction.onabort = () => {
      database.close()
      reject(transaction.error ?? new Error(`Transaction aborted for "${storeName}"`))
    }

    request.onerror = () => {
      reject(request.error ?? new Error(`Request failed for "${storeName}"`))
    }
  })
}

export async function getRecord<T>(storeName: StoreName, key: IDBValidKey) {
  return await withStore<T | undefined>(storeName, 'readonly', (store) => store.get(key))
}

export async function putRecord<T>(storeName: StoreName, key: IDBValidKey, value: T) {
  await withStore<IDBValidKey>(storeName, 'readwrite', (store) => store.put(value, key))
}

export async function deleteRecord(storeName: StoreName, key: IDBValidKey) {
  await withStore<undefined>(storeName, 'readwrite', (store) => store.delete(key))
}

export { STORE_NAMES }
