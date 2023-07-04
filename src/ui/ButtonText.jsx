import styled from "styled-components"

const ButtonText = styled.button`
  text-align: center;
  background: none;
  color: var(--color-brand-600);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText
