import React from 'react'
import styled from 'styled-components'

import { Text } from '../../text'

interface Props {
  name: string
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
`

export const SidebarSection = ({ name, children }: Props) => {
  return (
    <Container>
      <Text
        color="supporting"
        style={{ paddingLeft: 20 }}
        size={14}
        weight="600"
      >
        {name}
      </Text>
      {children}
    </Container>
  )
}
