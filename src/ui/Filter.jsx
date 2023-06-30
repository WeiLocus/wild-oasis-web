import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.4rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;

const FilterButton = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // set value into the URL
  function handleClick(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
