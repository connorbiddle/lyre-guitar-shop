import { css } from "styled-components";

const handleSizeError = (size, theme) => {
  if (!theme.breakpoints[size])
    throw new Error(
      `atSize() received an invalid size. Valid sizes are ${Object.keys(
        theme.breakpoints
      ).join(", ")}.`
    );
};

export const atSize = (size, styles) => {
  return css`
    @media (min-width: ${({ theme }) => {
        handleSizeError(size, theme);
        return theme.breakpoints[size];
      }}) {
      ${styles}
    }
  `;
};

export const beforeSize = (size, styles) => {
  return css`
    @media (min-width: ${({ theme }) => {
        if (!theme.breakpoints[size])
          throw new Error(
            `atSize() received an invalid size. Valid sizes are ${Object.keys(
              theme.breakpoints
            ).join(", ")}.`
          );

        return theme.breakpoints[size];
      }}) {
      ${styles}
    }
  `;
};
