import { Link } from "react-router-dom";
import { Card } from "../presentational";
import styled from "styled-components";

const ImageLink = ({ image, url, text }) => {
  return (
    <StyledImageLink to={url}>
      <Card hoverable className="image-link-contents">
        <img className="image-link-image" src={image} alt={text} />
        <div className="image-link-text">{text}</div>
      </Card>
    </StyledImageLink>
  );
};

const StyledImageLink = styled(Link)`
  margin: 1rem;

  .image-link-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .image-link-image {
    height: 100px;
    width: auto;
    margin-bottom: 1rem;
  }

  .image-link-text {
    font-size: 1.25rem;
    line-height: 1.5;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default ImageLink;
