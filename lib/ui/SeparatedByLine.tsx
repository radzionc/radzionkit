import styled, { css } from "styled-components"

import { VStack } from "./Stack"
import { getCSSUnit } from "./utils/getCSSUnit"
import { getColor } from "./theme/getters"

export const SeparatedByLine = styled(VStack)`
  > *:not(:last-child) {
    border-bottom: 1px solid ${getColor("mistExtra")};
    padding-bottom: ${({ gap = 0 }) => getCSSUnit(gap)};
  }
`
