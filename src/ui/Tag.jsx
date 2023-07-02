import styled from "styled-components";

const Tag = styled.span`
  padding: 0.4rem 1.2rem;
  width: fit-content;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;
