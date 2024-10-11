import styled from 'styled-components'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { VStack } from '../css/stack'

export const ModalContent = styled(VStack)`
  ${takeWholeSpace};
  overflow-y: auto;
`
