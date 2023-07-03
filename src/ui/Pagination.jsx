import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PER_PAGE } from "../utils/constants"; 

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
  align-items: center;
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

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const totalPage = Math.ceil(count / PER_PAGE);
  if (totalPage <= 1) return null 

  function nextPage() {
    const next = currentPage === totalPage ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1)*PER_PAGE + 1}</span> to <span>{ currentPage === totalPage ? count :currentPage * PER_PAGE}</span> of <span>{count}</span>{" "}
        results
      </P>
      <Buttons>
        <ButtonPagination onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </ButtonPagination>
        <span>{currentPage}</span>
        <ButtonPagination
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          <HiChevronRight />
          <span>Next</span>
        </ButtonPagination>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
