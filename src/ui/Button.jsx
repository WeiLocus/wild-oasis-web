import styled from "styled-components";

const Button = styled.button`
  padding: 1.4rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  font-weight: 500;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;


export default Button