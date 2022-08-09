import { useToggle } from "react-use";
import styled from "styled-components";
import { Sidebar } from "ui/Navigation/Sidebar";
import { ScreenCover } from "ui/ScreenCover";
import { Spacer } from "ui/Spacer";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

import { SidebarOpener } from "./SidebarOpener";

const Container = styled.div`
  width: 100%;
  padding: 12px 20px;
  display: grid;
  grid-template-columns: 28px 1fr 28px;
  align-items: center;
  justify-items: center;
`;

const Cover = styled(ScreenCover)`
  justify-content: flex-start;
`;

export const Topbar = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);

  return (
    <>
      {isSidebarOpen && (
        <Cover onClick={toggleSidebar}>
          <Sidebar />
        </Cover>
      )}
      <Container>
        <SidebarOpener onOpenSidebarRequest={toggleSidebar} />
      </Container>
      <Spacer height={20} />
    </>
  );
};
