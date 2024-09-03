import { interactive } from '@lib/ui/css/interactive'
import { Panel } from '@lib/ui/css/panel'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { transition } from '@lib/ui/css/transition'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { YouTubeIcon } from '@lib/ui/icons/YouTubeIcon'
import { CloseButton } from '@lib/ui/buttons/CloseButton'

type OnboardingVideoPromptProps = {
  renderVideo: () => ReactNode
}

const Container = styled(Panel)<{ isInteractive: boolean }>`
  ${({ isInteractive }) =>
    isInteractive &&
    css`
      ${interactive};
      ${transition};
      &:hover {
        background: ${getColor('mistExtra')};
        color: ${getColor('contrast')};
      }
    `}
`

export const OnboardingVideoPrompt = ({
  renderVideo,
}: OnboardingVideoPromptProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container
      withSections
      isInteractive={!isOpen}
      onClick={isOpen ? undefined : () => setIsOpen(true)}
    >
      <HStack
        alignItems="center"
        justifyContent="space-between"
        fullWidth
        gap={20}
        style={{ minHeight: 72 }}
      >
        <HStack alignItems="center" gap={12}>
          <IconWrapper style={{ fontSize: 24 }}>
            <YouTubeIcon />
          </IconWrapper>
          <Text weight="600">Watch a video to learn more</Text>
        </HStack>
        {isOpen && (
          <CloseButton kind="secondary" onClick={() => setIsOpen(false)} />
        )}
      </HStack>
      {isOpen && renderVideo()}
    </Container>
  )
}
