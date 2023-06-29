import { createContext, useContext } from "react";
import styled from "styled-components"


const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
`

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const TableContext = createContext()

function Table({ columns, children}) {
  return (
    <TableContext.Provider value={{columns}}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  )
}

function Header({children}) {
  const {columns} = useContext(TableContext)
  return (
    <StyledHeader role="row" as="header" columns={columns}>
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledRow role="row" columns={columns}>{children}</StyledRow>;
}
function Body() {}


Table.Header = Header
Table.Row = Row
Table.Body = Body

export default Table
