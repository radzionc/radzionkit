import { css } from "styled-components";

import { getCSSUnit } from "./getCSSUnit";

export const getSameDimensionsCSS = (size: string | number) => {
  const valueInCSSUnit = getCSSUnit(size);

  return css`
    width: ${valueInCSSUnit};
    height: ${valueInCSSUnit};
    min-width: ${valueInCSSUnit};
    min-height: ${valueInCSSUnit};
  `;
};
