import styled, { css } from 'styled-components'

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const InputContainer = styled.label`
  ${inputContainer};
`
