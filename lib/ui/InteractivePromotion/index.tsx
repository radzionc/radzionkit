import { ExternalLink } from "lib/navigation/Link/ExternalLink";
import { ReactNode, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { GhostButton } from "../buttons/rect/GhostButton";
import { PrimaryButton } from "../buttons/rect/PrimaryButton";
import { HStack, VStack } from "../Stack";
import { Text } from "../Text";
import { ReversedTheme } from "../theme/ReversedTheme";

interface InteractivePromotionProps {
  text: string;
  url: string;
  character: ReactNode;
  onDismiss?: () => void;
  onAccept?: () => void;
}

const CharacterContainer = styled(animated.div)`
  position: fixed;
  z-index: 6;
  bottom: 0;
  left: 0;
`;

const MessageContainer = styled(animated.div)`
  position: fixed;
  z-index: 7;
  left: 280px;
  bottom: 28px;
`;

const Content = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background.toCssValue()};
  border-radius: 24px;
  padding: 24px;
  max-width: 280px;
  z-index: 2;
`;

const Connector = styled.div`
  top: -10px;
  position: absolute;
  color: ${({ theme }) => theme.colors.background.toCssValue()};
  left: 1px;
  transform: translateX(-100%);
  pointer-events: none;
`;

export const InteractivePromotion = ({
  text,
  url,
  character,
  onDismiss,
  onAccept,
}: InteractivePromotionProps) => {
  const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] =
    useState(false);

  const characterAnimationStyles = useSpring({
    config: {
      ...config.slow,
      friction: 40,
      clamp: true,
    },
    from: {
      bottom: -200,
    },
    to: {
      bottom: 0,
    },
    onRest: () => setIsCharacterAnimationFinished(true),
  });

  return (
    <>
      <CharacterContainer style={characterAnimationStyles}>
        {character}
      </CharacterContainer>
      {isCharacterAnimationFinished && (
        <ReversedTheme>
          <MessageContainer>
            <Content>
              <Connector>
                <svg
                  width="65"
                  height="78"
                  viewBox="0 0 95 95"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="currentColor"
                    d="M0 0C0 0 24.8936 38.9937 47 58C57.5966 67.1106 73.8292 77.0249 84.1762 83C90.03 86.3804 94 95 94 95L94.5 36C94.5 36 88.5727 43.1045 81 41.4825C70.8874 39.3165 56.9488 35.8549 47 31.5C26.7586 22.6397 0 0 0 0Z"
                  ></path>
                </svg>
              </Connector>
              <VStack alignItems="start" gap={16}>
                <Text weight="bold" color="regular">
                  {text}
                </Text>
                <HStack gap={8} justifyContent="start">
                  <ExternalLink to={url}>
                    <PrimaryButton onClick={onAccept} kind="attention" as="div">
                      Yes!
                    </PrimaryButton>
                  </ExternalLink>
                  <GhostButton onClick={onDismiss}>No, thanks</GhostButton>
                </HStack>
              </VStack>
            </Content>
          </MessageContainer>
        </ReversedTheme>
      )}
    </>
  );
};
