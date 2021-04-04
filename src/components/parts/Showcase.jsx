import styled, { css } from "styled-components";
import { PageSection, Typography } from "../presentational";
import { Button } from "../utility";
import { atSize } from "../../style/mixins";
import ShowcaseImg from "../../assets/showcase.jpg";

const Showcase = () => {
  return (
    <PageSection>
      <ShowcaseFigure>
        <figcaption>
          <Typography type="h3">Lorem ipsum dolor sit amet.</Typography>
          <Button large>Lorem Ipsum</Button>
        </figcaption>
        <img src={ShowcaseImg} alt="" />
      </ShowcaseFigure>
    </PageSection>
  );
};

const ShowcaseFigure = styled.figure`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  figcaption {
    position: absolute;
    top: 50%;
    left: 1rem;
    right: 1rem;
    color: #fff;
    text-align: center;
    transform: translateY(-50%);
    z-index: 2;
  }

  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }

  ${atSize(
    "md",
    css`
      padding-bottom: 32.5%;

      figcaption {
        text-align: left;
        left: 3rem;
        right: 3rem;

        h3 {
          font-size: 2.5rem;
          margin-bottom: 1.25rem;
        }
        button {
          font-size: 1.35rem;
        }
      }
    `
  )}
`;

export default Showcase;
