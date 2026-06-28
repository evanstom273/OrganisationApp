import { useParams } from 'react-router-dom'

import { PlaceholderPage } from '@/components/PlaceholderPage'

export default function ProjectDetailPage() {
  const { projectId } = useParams()

  return (
    <PlaceholderPage
      eyebrow="Dynamic route"
      title={`Project ${projectId ?? 'unknown'}`}
      description="This placeholder confirms that dynamic project routes are already part of the scaffold."
      meta={`Route param detected: ${projectId ?? 'none'}. Future project views can load local IndexedDB records or derived UI state here.`}
    />
  )
}
