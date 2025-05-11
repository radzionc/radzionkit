import { useNavigateBack } from '@lib/navigation/hooks/useNavigateBack'
import { useNavigation } from '@lib/navigation/state'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { interactive } from '@lib/ui/css/interactive'
import { hStack, vStack } from '@lib/ui/css/stack'
import { ChevronLeftIcon } from '@lib/ui/icons/ChevronLeftIcon'
import { SettingsIcon } from '@lib/ui/icons/SettingsIcon'
import { ChildrenProp } from '@lib/ui/props'
import { text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { initialView } from './navigation/AppView'
import { useAppNavigate } from './navigation/hooks/useAppNavigate'

const Container = styled.div`
  width: 320px;
  ${borderRadius.m}
  ${vStack()};
  border: 1px solid ${getColor('mist')};

  > * {
    padding: 12px;
  }
`

const Header = styled.div`
  ${hStack({
    alignItems: 'center',
    justifyContent: 'space-between',
  })};
  background: ${getColor('mist')};
`

const Content = styled.div`
  ${vStack({
    gap: 20,
    justifyContent: 'space-between',
  })};
  min-height: 200px;
`

const Title = styled.div`
  ${interactive};
  ${text({
    size: 20,
    weight: 600,
  })};
  &:hover {
    color: ${getColor('contrast')};
  }
`

export const Layout = ({ children }: ChildrenProp) => {
  const [{ history, currentIndex }] = useNavigation()
  console.log({ history, currentIndex })
  const goBack = useNavigateBack()
  const navigate = useAppNavigate()

  return (
    <Container>
      <Header>
        <IconButton
          isDisabled={history.length < 2 || currentIndex === 0}
          icon={<ChevronLeftIcon />}
          title="Back"
          onClick={goBack}
        />
        <Title onClick={() => navigate(initialView)}>Calculator</Title>
        <IconButton
          icon={<SettingsIcon />}
          title="Settings"
          onClick={() => navigate({ id: 'settings' })}
        />
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}
