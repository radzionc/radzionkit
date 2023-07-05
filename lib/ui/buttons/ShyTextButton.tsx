import { ReactNode } from "react"
import styled from "styled-components"
import { defaultTransitionCSS } from "../animations/transitions"
import { Text } from "../Text"

import { UnstyledButton } from "./UnstyledButton"
import { getColor } from "../theme/getters"

interface Props {
  onClick?: () => void
  text: ReactNode
  as?: any
}

const Container = styled(UnstyledButton)`
  color: ${getColor("textSupporting")};
  ${defaultTransitionCSS};

  :hover {
    color: ${getColor("contrast")};
  }
`

const Underline = styled.span`
  position: absolute;
  left: 1px;
  bottom: 1px;
  width: calc(100% - 1px);
  border-bottom: 1px dashed;
`

export const ShyTextButton = ({ onClick, text, as }: Props) => {
  return (
    <Container as={as} onClick={onClick}>
      <Text
        size={14}
        nowrap
        style={{ transition: "none", position: "relative" }}
        weight="bold"
      >
        {text}
        <Underline />
      </Text>
    </Container>
  )
}
