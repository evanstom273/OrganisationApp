import {
  Archive,
  FolderKanban,
  Home,
  Inbox,
  Search,
  Settings,
  Tags,
} from 'lucide-react'

import type { NavigationItem } from '@/types/navigation'

export const navigationItems: NavigationItem[] = [
  { label: 'Home', to: '/', icon: Home, match: 'exact' },
  { label: 'Inbox', to: '/inbox', icon: Inbox, match: 'exact', badge: 12 },
  { label: 'Projects', to: '/projects', icon: FolderKanban, match: 'prefix' },
  { label: 'Tags', to: '/tags', icon: Tags, match: 'exact' },
  { label: 'Search', to: '/search', icon: Search, match: 'exact' },
  { label: 'Archive', to: '/archive', icon: Archive, match: 'exact' },
  { label: 'Settings', to: '/settings', icon: Settings, match: 'exact' },
]
