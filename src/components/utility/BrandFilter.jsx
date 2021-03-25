import styled from "styled-components";
import { Typography } from "../presentational";

const CategoryFilter = props => {
  return (
    <StyledCategoryFilter {...props}>
      <Typography type="h4">Brands</Typography>
      This is the category filter. Lorem ipsum dolor sit amet consectetur.
    </StyledCategoryFilter>
  );
};

const StyledCategoryFilter = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.midGrey};
`;

export default CategoryFilter;
