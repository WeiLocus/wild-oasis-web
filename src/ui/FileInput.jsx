import styled from "styled-components"

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    margin-right: 1.2rem;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: var(--border-radius-sm);
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    font: inherit;
    font-weight: 500;
    transition: color .2s background-color .2s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
