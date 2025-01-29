// based on https://www.joshwcomeau.com/animation/3d-button/
import { ComponentProps } from 'react'

import styled from 'styled-components'
import { UnstyledButton } from './UnstyledButton'
import { takeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { borderRadius } from '../css/borderRadius'
import { AsProp } from '../props'
import { getColor } from '../theme/getters'
import { centerContent } from '../css/centerContent'

const ctaButtonBorderRadius = borderRadius.m

const Container = styled(UnstyledButton)`
  position: relative;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }
`

const Shadow = styled.span`
  ${takeWholeSpaceAbsolutely};
  ${ctaButtonBorderRadius};
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Container}:hover & {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Container}:active & {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`

const Edge = styled.span`
  ${takeWholeSpaceAbsolutely};
  ${ctaButtonBorderRadius};
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 42px;
  ${ctaButtonBorderRadius};
  font-size: 1.25rem;
  color: ${getColor('white')};
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  font-weight: 600;

  ${centerContent};

  ${Container}:hover & {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Container}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`

export const CtaButton: React.FC<ComponentProps<typeof Container> & AsProp> = ({
  children,
  ...rest
}) => (
  <Container {...rest}>
    <Shadow />
    <Edge />
    <Front>{children}</Front>
  </Container>
)
