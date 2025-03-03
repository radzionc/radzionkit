import { OnHoverAction } from '@lib/ui/base/OnHoverAction'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { HSLA } from '@lib/ui/colors/HSLA'
import { centerContent } from '@lib/ui/css/centerContent'
import { Panel } from '@lib/ui/css/panel'
import { VStack } from '@lib/ui/css/stack'
import { takeWholeSpace } from '@lib/ui/css/takeWholeSpace'
import { PauseIcon } from '@lib/ui/icons/PauseIcon'
import { PlayIcon } from '@lib/ui/icons/PlayIcon'
import { StarIcon } from '@lib/ui/icons/StarIcon'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components'

const options = [
  'Lofi jazz study music',
  'Productive music for work',
  'Rainy night coffee shop',
  'Cozy jazz coffee shop',
  'Ambient study music',
  'Focus music',
  'Zen Music',
  'Coffee shop with piano music',
  'Cozy cabin ambience',
  'Lofi hip hop',
  'Yoga music',
  'Chillstep music',
  'Work & study lofi jazz',
  'Classic music',
  'Chill out beach sunset jazz',
  'Synthwave',
  'Brown noise',
  'White noise',
  'Inspirational music',
]

const PlayIndicator = styled.div<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: absolute;

  font-size: 20px;
  display: flex;
  color: ${({ theme }) => theme.colors.text.toCssValue()};
`

const SoundNumber = styled(Text)`
  transition: none;
`

const Identifier = styled.div`
  ${takeWholeSpace};
  ${centerContent};
  position: relative;
`

const Container = styled(UnstyledButton)`
  width: 100%;
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  gap: 8px;
  justify-items: start;
  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};

  &:hover {
    background: ${getColor('mist')};
    color: ${({ theme }) => theme.colors.text.toCssValue()};
  }

  &:hover ${PlayIndicator} {
    opacity: 1;
  }
  &:hover ${SoundNumber} {
    opacity: 0;
  }
`

const Star = styled(StarIcon)<{ $color: HSLA }>`
  font-size: 16px;
  color: ${({ $color }) => $color.toCssValue()};
`

export default makeDemoPage(() => {
  const [favourites, setFavourites] = useState<number[]>([])
  const { colors } = useTheme()
  const [activeItem, setActiveItem] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <DemoPage youtubeVideoId="35XAA5Hgag0" title="On hover action">
      <Panel style={{ padding: 0 }} kind="secondary">
        <VStack>
          {options.map((option, index) => {
            const isFavourite = favourites.includes(index)
            const isActive = activeItem === index

            const star = (
              <Star
                $color={isFavourite ? colors.idle : colors.textSupporting}
              />
            )

            return (
              <OnHoverAction
                key={index}
                actionPlacerStyles={{ right: 8 }}
                action={
                  <IconButton
                    title={isFavourite ? 'Remove from favourites' : 'Favourite'}
                    icon={star}
                    onClick={() => {
                      setFavourites(
                        isFavourite
                          ? favourites.filter((i) => i !== index)
                          : [...favourites, index],
                      )
                    }}
                  />
                }
                render={({ actionSize, actionPlacerStyles }) => (
                  <Container
                    style={{ padding: actionPlacerStyles.right }}
                    onClick={() => {
                      setActiveItem(index)
                      if (isActive) {
                        setIsPlaying(!isPlaying)
                      }
                    }}
                  >
                    <Identifier>
                      {!isActive && <SoundNumber>{index + 1}.</SoundNumber>}
                      <PlayIndicator isActive={isActive}>
                        {isActive && isPlaying ? <PauseIcon /> : <PlayIcon />}
                      </PlayIndicator>
                    </Identifier>
                    <Text
                      style={{ maxWidth: '100%' }}
                      cropped
                      color={isActive ? 'regular' : undefined}
                    >
                      {option}
                    </Text>
                    {actionSize && (
                      <VStack
                        style={actionSize}
                        alignItems="center"
                        justifyContent="center"
                      >
                        {isFavourite && star}
                      </VStack>
                    )}
                  </Container>
                )}
              />
            )
          })}
        </VStack>
      </Panel>
    </DemoPage>
  )
})
