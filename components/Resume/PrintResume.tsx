import styled from "styled-components";
import { StickyIconButton } from "lib/ui/buttons/square/StickyIconButton";
import ReactToPrint from "react-to-print";
import { DownloadIcon } from "lib/ui/icons/DonwloadIcon";
import { ReactInstance } from "react";

interface Props {
  renderContent: () => ReactInstance | null;
}

const PrintButton = styled(StickyIconButton)`
  @media print {
    display: none;
  }
`;

export const PrintResume = ({ renderContent }: Props) => (
  <ReactToPrint
    trigger={() => <PrintButton icon={<DownloadIcon />} />}
    content={renderContent}
  />
);
