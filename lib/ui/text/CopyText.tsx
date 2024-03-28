import { CopyIcon } from '../icons/CopyIcon'
import styled from 'styled-components'
import { getColor, matchColor } from '../theme/getters'
import copy from 'copy-to-clipboard'
import { useState } from 'react'
import { CheckIcon } from '../icons/CheckIcon'
import { Text } from '../text'
import { Match } from '../base/Match'
import { transition } from '../css/transition'

interface CopyTextProps extends React.ComponentProps<typeof Text> {
  content: string
  isIconAlwaysVisible?: boolean
}

const IconWr = styled(Text)<{ isIconAlwaysVisible: boolean }>`
  margin-left: 4px;
  ${transition};
  color: ${matchColor('isIconAlwaysVisible', {
    false: 'transparent',
    true: 'textShy',
  })};
  svg {
    vertical-align: middle;
  }
`

const Container = styled(Text)`
  cursor: pointer;

  &:hover ${IconWr} {
    color: ${getColor('contrast')};
  }
`

type IconToShow = 'copy' | 'copied'

export const CopyText = ({
  content,
  children,
  isIconAlwaysVisible = true,
  ...rest
}: CopyTextProps) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>('copy')

  return (
    <Container
      as="span"
      onMouseLeave={() => setIconToShow('copy')}
      onTouchEnd={() => setIconToShow('copy')}
      onClick={() => {
        copy(content)
        setIconToShow('copied')
      }}
      {...rest}
    >
      {children}
      <IconWr isIconAlwaysVisible={isIconAlwaysVisible} as="span">
        <Match
          value={iconToShow}
          copy={() => <CopyIcon />}
          copied={() => <CheckIcon />}
        />
      </IconWr>
    </Container>
  )
}
