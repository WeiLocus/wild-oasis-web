import { useSearchParams } from "react-router-dom"
import Select from "./Select"
import styled from "styled-components"


const Container = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 2%;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: var(--color-grey-700) transparent transparent transparent;

    transform: translateY(-50%);
  }
`;

function SortBy({options}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get("sortBy") || ""

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value)
    setSearchParams(searchParams)

  }
  return (
    <Container>
      <Select
        options={options}
        value={sortBy}
        type="white"
        onChange={handleChange}
      />
    </Container>
  );
}

export default SortBy
