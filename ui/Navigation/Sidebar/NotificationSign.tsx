import styled from 'styled-components'

export const NotificationSign = styled.div`
  position: absolute;
  right: -14px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 100000px;
  background: ${({ theme }) => theme.colors.alert.toCssValue()};
`
