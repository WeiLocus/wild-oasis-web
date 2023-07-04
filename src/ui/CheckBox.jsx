import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & input[type="checkbox"] {
    width: 2.4rem;
    height: 2.4rem;
    outline-offset: 2px;
    accent-color: var(--color-brand-600);
    transform-origin: 0;
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }
`;

// rest operator
function CheckBox({ children,id, ...props}) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox" {...props}
      />
      <label htmlFor={id}>{children}</label>
    </StyledCheckbox>
  );
}

export default CheckBox;
