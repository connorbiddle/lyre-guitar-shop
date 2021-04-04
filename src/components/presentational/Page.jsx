import styled from "styled-components";
import { Loading } from "./";

const Page = ({ children, loading }) => {
  return (
    <StyledPage>
      {loading === true ? <Loading size="2x" pageLoading center /> : children}
    </StyledPage>
  );
};

const StyledPage = styled.section`
  padding: 3.5rem 0 7rem;
`;

export default Page;
