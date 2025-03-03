import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { getColor } from '../theme/getters'

export type FeatureVideoProps = {
  videoId: string
}

const Container = styled.video`
  width: 100%;
  max-width: 1000px;
  height: auto;
  ${borderRadius.m}
  overflow: hidden;
  border: 2px solid ${getColor('primary')};
`

export const FeatureVideo = ({ videoId }: FeatureVideoProps) => {
  return (
    <Container autoPlay muted loop>
      <source src={`/videos/${videoId}.mp4`} type="video/mp4" />
    </Container>
  )
}
