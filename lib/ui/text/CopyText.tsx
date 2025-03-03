import { useState } from 'react'
import styled from 'styled-components'

import { Match } from '../base/Match'
import { transition } from '../css/transition'
import { CheckIcon } from '../icons/CheckIcon'
import { CopyIcon } from '../icons/CopyIcon'
import { ChildrenProp, UiProps } from '../props'
import { Text, TextProps } from '../text'
import { getColor, matchColor } from '../theme/getters'
import { copyTextToClipboard } from '../utils/copyTextToClipboard'

type CopyTextProps = {
  content: string
  isIconAlwaysVisible?: boolean
} & ChildrenProp &
  TextProps &
  UiProps

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
        copyTextToClipboard(content)
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
