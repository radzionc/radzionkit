import styled from 'styled-components'
import { getColor } from './theme/getters'
import copy from 'copy-to-clipboard'
import { useState } from 'react'
import { Match } from '../base/Match'
import { Text } from '../text'
import { transition } from '../css/transition'
import { CheckIcon } from '../icons/CheckIcon'
import { CopyIcon } from '../icons/CopyIcon'

interface CopyTextProps extends React.ComponentProps<typeof Text> {
  content: string
}

const IconWr = styled(Text)`
  margin-left: 4px;
  ${transition};
  color: ${getColor('textShy')};
`

const Container = styled(Text)`
  cursor: pointer;

  &:hover ${IconWr} {
    color: ${getColor('contrast')};
  }
`

type IconToShow = 'copy' | 'copied'

export const CopyText = ({ content, children, ...rest }: CopyTextProps) => {
  const [iconToShow, setIconToShow] = useState<IconToShow>('copy')

  return (
    <Container
      onMouseLeave={() => setIconToShow('copy')}
      onTouchEnd={() => setIconToShow('copy')}
      onClick={() => {
        copy(content)
        setIconToShow('copied')
      }}
      as="span"
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
