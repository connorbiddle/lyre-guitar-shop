import { Loading, PageSection, Typography } from "../presentational";
import { ImageLink } from "../utility";
import {
  Electric,
  Acoustic,
  Bass,
  Pedal,
  Amplifier,
} from "../../assets/categories";
import styled from "styled-components";

const Showcase = ({ categories }) => {
  const categoryImages = {
    "Electric Guitars": Electric,
    "Bass Guitars": Bass,
    "Acoustic Guitars": Acoustic,
    "Guitar Pedals": Pedal,
    Amplifiers: Amplifier,
  };

  return (
    <PageSection>
      <Typography type="h2" textAlign="center" size="2rem" capitalize>
        Welcome to Lyre!
      </Typography>
      <Typography type="h3" fontWeight="400" textAlign="center">
        Tell us what you're looking for to get started...
      </Typography>

      {categories ? (
        <Links>
          {categories.map(({ id, name, slug }) => (
            <ImageLink
              key={id}
              url={`/category/${slug}`}
              image={categoryImages[name]}
              text={name}
            />
          ))}
        </Links>
      ) : (
        <Loading center size="2x" height="10rem" />
      )}
    </PageSection>
  );
};

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -1rem;

  > a {
    flex-basis: 208px;
    margin: 1rem;
  }
`;

export default Showcase;
