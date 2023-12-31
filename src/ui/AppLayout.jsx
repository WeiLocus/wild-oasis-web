import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media screen and (min-width: ${breakpoint.md}) {
    grid-template-columns: 26rem 1fr;
  }
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 120rem;
  margin: 0 auto;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
