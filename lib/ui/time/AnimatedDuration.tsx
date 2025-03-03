import { HStack } from '@lib/ui/css/stack'
import { useRhythmicRerender } from '@lib/ui/hooks/useRhythmicRerender'
import { Text } from '@lib/ui/text'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { Milliseconds } from '@lib/utils/time/types'
import { useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface AnimatedDurationProps {
  getDuration: (currentTime: number) => Milliseconds
}

const CharacterContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
`

const getAnimation = (id: string) => keyframes`
  0% {
    --id: ${id};
    bottom: 0%;
  }
`

const Character = styled(Text)<{ animationId?: string }>`
  position: absolute;
  bottom: -100%;
  ${({ animationId }) =>
    animationId &&
    css`
      animation: ${getAnimation(animationId)} 640ms ease-in-out;
    `}
`

export const AnimatedDuration = ({ getDuration }: AnimatedDurationProps) => {
  const now = useRhythmicRerender()

  const duration = getDuration(now)
  const timeString = formatDuration(duration, 'ms', {
    kind: 'digitalClock',
    minUnit: 's',
  })
  const initialTimeString = useRef(timeString)
  const previousTimeString = formatDuration(
    timeString === initialTimeString.current
      ? duration
      : Math.max(0, duration - convertDuration(1, 's', 'ms')),
    'ms',
    {
      kind: 'digitalClock',
      minUnit: 's',
    },
  )

  return (
    <HStack>
      {timeString.split('').map((character, index) => {
        const previousCharacter = previousTimeString[index]
        const animationId =
          previousCharacter !== character
            ? `${previousCharacter}${character}`
            : undefined
        const color = index > timeString.length - 4 ? 'supporting' : 'contrast'

        return (
          <CharacterContainer key={index}>
            <Text style={{ visibility: 'hidden' }}>{character}</Text>
            <Character as="div" color={color} animationId={animationId}>
              <Text>{character}</Text>
              <Text>{previousCharacter}</Text>
            </Character>
          </CharacterContainer>
        )
      })}
    </HStack>
  )
}
