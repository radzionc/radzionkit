import { Text } from "ui/Text"
import { CopyIcon } from "./icons/CopyIcon"
import styled from "styled-components"
import { getColor } from "./theme/getters"
import copy from "copy-to-clipboard"
import { defaultTransitionCSS } from "./animations/transitions"
import { useState } from "react"
import { Match } from "./Match"
import { CheckIcon } from "./icons/CheckIcon"

interface CopyTextProps extends React.ComponentProps<typeof Text> {
  content: string
}

const IconWr = styled(Text)`
  margin-left: 4px;
  ${defaultTransitionCSS};
  color: ${getColor("textShy")};
`

const Container = styled(Text)`
  cursor: pointer;

  &:hover ${IconWr} {
    color: ${getColor("contrast")};
  }
`

type IconToShow = "copy" | "copied"

export const CopyText = ({ content, children, ...rest }: CopyTextProps) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>("copy")

  return (
    <Container
      onMouseLeave={() => setIconToShow("copy")}
      onTouchEnd={() => setIconToShow("copy")}
      onClick={() => {
        copy(content)
        setIconToShow("copied")
      }}
      {...rest}
    >
      {children}
      <IconWr as="span">
        <Match
          value={iconToShow}
          copy={() => <CopyIcon />}
          copied={() => <CheckIcon />}
        />
      </IconWr>
    </Container>
  )
}
