import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  width: 260px;
  height: 4rem;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.25rem;
  color: var(--gray-900);
  transition: filter 0.2s;
  background: var(--yellow-500);

  &:hover {
    filter: brightness(0.8);
  }
`;
