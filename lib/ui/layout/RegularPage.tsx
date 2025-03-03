import { VStack } from '@lib/ui/css/stack'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { toSizeUnit } from '../css/toSizeUnit'
import { Text } from '../text'

import { Spacer } from './Spacer'

type PageWidth = 'm' | 's'

interface Props {
  children: ReactNode
  title?: ReactNode
  width?: PageWidth
}

const maxWidth: Record<PageWidth, number> = {
  m: 1036,
  s: 750,
}

const Container = styled(VStack)<{ maxWidth: number }>`
  max-width: ${({ maxWidth }) => toSizeUnit(maxWidth)};
  width: 100%;

  @media (max-width: ${({ maxWidth }) => toSizeUnit(maxWidth)}) {
    max-width: calc(100vw - 40px);
  }
`

export const RegularPage = ({ children, title, width = 'm' }: Props) => {
  return (
    <VStack fullWidth alignItems="center">
      <Container maxWidth={maxWidth[width]} alignItems="start">
        {title && (
          <>
            <Text weight="600" size={24} color="regular" as="div">
              {title}
            </Text>
            <Spacer height={32} />
          </>
        )}
        {children}
      </Container>
      <Spacer height={40} />
    </VStack>
  )
}
