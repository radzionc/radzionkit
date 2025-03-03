import styled from 'styled-components'

import { VStack } from '../css/stack'
import { takeWholeSpace } from '../css/takeWholeSpace'

export const ModalContent = styled(VStack)`
  ${takeWholeSpace};
  overflow-y: auto;
`
