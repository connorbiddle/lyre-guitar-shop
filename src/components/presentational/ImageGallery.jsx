import { useRef, useState, useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import { clamp } from "../../functions";
import { atSize } from "../../style/mixins";

const ImageGallery = ({ className, images }) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const imgElement = useRef();

  const { breakpoints } = useContext(ThemeContext);

  const handleImageSelect = image => {
    return () => setCurrentImg(image);
  };

  const startImageZoom = () => {
    if (window.innerWidth < parseInt(breakpoints.lg)) return;

    const img = imgElement.current;
    const { left, top, width, height } = img.getBoundingClientRect();
    img.style.transform = "scale(2.5)";

    const moveImageZoom = e => {
      const mousePos = {
        x: clamp((e.clientX - left) / width, 0, 1) * 100,
        y: clamp((e.clientY - top) / height, 0, 1) * 100,
      };

      img.style.transformOrigin = `${mousePos.x}% ${mousePos.y}%`;
    };

    const stopImageZoom = () => {
      img.style.transform = "none";
      img.removeEventListener("mousemove", moveImageZoom);
    };

    img.addEventListener("mousemove", moveImageZoom);
    img.addEventListener("mouseleave", stopImageZoom);
  };

  return (
    <StyledImageGallery className={className}>
      <figure className="image-gallery-image">
        <img
          src={currentImg.url}
          alt=""
          onMouseOver={startImageZoom}
          ref={imgElement}
        />
      </figure>
      <div className="image-gallery-select">
        {images.map(image => (
          <button key={image.id} onClick={handleImageSelect(image)}>
            <img src={image.url} alt="" />
          </button>
        ))}
      </div>
    </StyledImageGallery>
  );
};

const StyledImageGallery = styled.div`
  margin: 0 auto 1rem;
  width: 500px;
  max-width: 100%;

  .image-gallery-image {
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    overflow: hidden;

    img {
      width: 100%;
      padding: 1rem;
      transition: transform-origin 25ms linear, transform 200ms ease;
    }
  }

  .image-gallery-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -0.5rem;

    button {
      background: none;
      border: none;
      flex-basis: 130px;
      flex-grow: 0;
      padding: 0.5rem;
      margin: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    }
  }

  ${atSize(
    "lg",
    css`
      margin: 0 0 1rem;
      display: flex;
      align-items: flex-start;
      max-width: 100%;

      .image-gallery-image {
        order: 2;
      }

      .image-gallery-select {
        order: 1;
        flex-direction: column;
        flex-basis: calc(100px + 1rem);
        flex-shrink: 0;
        margin-right: 0.5rem;

        button {
          flex-basis: 100px;
        }
      }
    `
  )}
`;

export default ImageGallery;
