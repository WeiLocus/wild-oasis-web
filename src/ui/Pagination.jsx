import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const P = styled.p`
  margin-left: 0.8rem;
  font-size: 1.4rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const ButtonPagination = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }
`;

function Pagination() {
  return (
    <StyledPagination>
      <P>
        Showing <span>1</span> to <span>50</span> of <span>5</span> results
      </P>
      <Buttons>
        <ButtonPagination>
          <HiChevronLeft />
          <span>Previous</span>
        </ButtonPagination>
        <ButtonPagination>
          <HiChevronRight />
          <span>Next</span>
        </ButtonPagination>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
