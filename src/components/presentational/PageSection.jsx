import styled, { css } from "styled-components";
import { atSize } from "../../style/mixins";

const PageSection = styled.section`
  padding: 40px 0;

  ${atSize(
    "md",
    css`
      padding: 80px 0;
    `
  )}

  &:first-of-type {
    padding-top: 0;
    ${atSize("md", "padding-top: 20px;")}
  }
`;

export default PageSection;
