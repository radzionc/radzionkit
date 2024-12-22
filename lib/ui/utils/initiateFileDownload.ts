import { EntityWithName } from '@lib/utils/entities/EntityWithName'

type InitiateFileDownloadInput = {
  type: string
  value: BlobPart
} & EntityWithName

export const initiateFileDownload = ({
  type,
  value,
  name,
}: InitiateFileDownloadInput) => {
  const blob = new Blob([value], { type })

  const url = URL.createObjectURL(blob)

  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name

  document.body.appendChild(anchor)
  anchor.click()

  anchor.remove()
  URL.revokeObjectURL(url)
}
