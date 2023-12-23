import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import { DownloadIcon } from '@radzionkit/ui/icons/DonwloadIcon'
import { ReactInstance } from 'react'
import { IconButton } from '@radzionkit/ui/buttons/IconButton'

interface Props {
  renderContent: () => ReactInstance | null
}

const PrintButton = styled(IconButton)`
  @media print {
    display: none;
  }
`

export const PrintResume = ({ renderContent }: Props) => (
  <ReactToPrint
    trigger={() => <PrintButton title="Print" icon={<DownloadIcon />} />}
    content={renderContent}
  />
)
