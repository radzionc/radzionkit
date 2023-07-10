import styled from "styled-components"
import ReactToPrint from "react-to-print"
import { DownloadIcon } from "lib/ui/icons/DonwloadIcon"
import { ReactInstance } from "react"
import { IconButton } from "lib/ui/buttons/IconButton"

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
    trigger={() => <PrintButton icon={<DownloadIcon />} />}
    content={renderContent}
  />
)
