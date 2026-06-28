import HomePage from '@/pages/HomePage'
import InboxPage from '@/pages/InboxPage'
import ItemDetailPage from '@/pages/ItemDetailPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ProjectsPage from '@/pages/ProjectsPage'
import SearchPage from '@/pages/SearchPage'
import SettingsPage from '@/pages/SettingsPage'
import TagsPage from '@/pages/TagsPage'

export const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/inbox', element: <InboxPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:projectId', element: <ProjectDetailPage /> },
  { path: '/items/:itemId', element: <ItemDetailPage /> },
  { path: '/tags', element: <TagsPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/settings', element: <SettingsPage /> },
]
