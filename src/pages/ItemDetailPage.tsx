import { useParams } from 'react-router-dom'

import { PlaceholderPage } from '@/components/PlaceholderPage'

export default function ItemDetailPage() {
  const { itemId } = useParams()

  return (
    <PlaceholderPage
      eyebrow="Dynamic route"
      title={`Item ${itemId ?? 'unknown'}`}
      description="This placeholder confirms that item detail routing is available before the real item feature set is added."
      meta={`Route param detected: ${itemId ?? 'none'}. This is a natural place for future item metadata, notes, or task state.`}
    />
  )
}
