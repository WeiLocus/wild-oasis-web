import styled from "styled-components";


const ButtonIcon = styled.button`
  padding: 0.6rem;
  border: none;
  background: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon