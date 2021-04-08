import { css, keyframes } from "styled-components";

export const fade = (duration = "250ms", delay = "0ms") => {
  const kf = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  return css`
    animation: ${kf} ease ${duration} ${delay};
  `;
};

export const spin = (duration = "1s") => {
  const kf = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return css`
    animation: ${kf} linear ${duration} infinite;
  `;
};
