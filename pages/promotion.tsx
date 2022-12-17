import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { InteractivePromotion } from "lib/ui/InteractivePromotion";
import styled from "styled-components";
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from "state/persistentStorage";
import { ShowAfterDelay } from "lib/ui/ShowAfterDelay";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PromotionPage: NextPage = () => {
  const [wasShown, setWasShown] = usePersistentStorageValue(
    PersistentStorageKey.Promotion,
    false
  );
  return (
    <DemoPage title="Interactive Promotion">
      {!wasShown && (
        <ShowAfterDelay ms={10000}>
          <InteractivePromotion
            onDismiss={() => setWasShown(true)}
            onAccept={() => setWasShown(true)}
            url="https://increaser.org"
            text="Hi there! Can I share a tool for deep work with you?"
            character={<Image src="/hello.png" alt="hello" />}
          />
        </ShowAfterDelay>
      )}
    </DemoPage>
  );
};

export default PromotionPage;
