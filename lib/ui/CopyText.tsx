import { Text } from "lib/ui/Text"
import { CopyIcon } from "./icons/CopyIcon"
import styled from "styled-components"
import { getColor } from "./theme/getters"
import copy from "copy-to-clipboard"
import { defaultTransitionCSS } from "./animations/transitions"
import { useEffect, useState } from "react"
import { Match } from "./Match"
import { CheckIcon } from "./icons/CheckIcon"

interface CopyTextProps extends React.ComponentProps<typeof Text> {
  content: string
}

const CopyWr = styled(Text)`
  margin-left: 4px;
  ${defaultTransitionCSS};
  color: ${getColor("textSupporting3")};
`

const Container = styled(Text)`
  cursor: pointer;

  &:hover ${CopyWr} {
    color: ${getColor("contrast")};
  }
`

type IconToShow = "copy" | "copied"

export const CopyText = ({ content, children, ...rest }: CopyTextProps) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>("copy")

  useEffect(() => {
    if (iconToShow === "copy") return

    const timeout = setTimeout(() => {
      setIconToShow("copy")
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [iconToShow])

  return (
    <Container
      onClick={() => {
        copy(content)
        setIconToShow("copied")
      }}
      {...rest}
    >
      {children}
      <CopyWr as="span">
        <Match
          value={iconToShow}
          copy={() => <CopyIcon />}
          copied={() => <CheckIcon />}
        />
      </CopyWr>
    </Container>
  )
}
