import styled, { keyframes } from "styled-components";
import { getCSSUnit } from "ui/utils/getCSSUnit";

interface Props {
  size?: string | number;
}

const animationForRotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{ size: string | number }>`
  width: ${({ size }) => getCSSUnit(size)};
  height: ${({ size }) => getCSSUnit(size)};

  border: calc(${({ size }) => getCSSUnit(size)} * 0.12) solid;
  border-radius: 50%;
  border-top-color: transparent;

  animation: ${animationForRotation} 1s infinite linear;
`;

export const Spinner = ({ size = 24 }: Props) => {
  return <Container size={size} />;
};
