import styled from "styled-components";
import { Loading } from "./";

const Page = ({ children, loading }) => {
  const PageLoading = () => (
    <StyledPageLoading>
      <Loading size="3x" />
    </StyledPageLoading>
  );

  return !loading ? <StyledPage>{children}</StyledPage> : <PageLoading />;
};

const StyledPage = styled.section`
  padding: 3.5rem 0 7rem;
`;

const StyledPageLoading = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 202;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
`;

export default Page;
