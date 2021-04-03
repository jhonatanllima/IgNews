import styled from "styled-components";

export const Container = styled.button`
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  font-weight: bold;
  color: var(--white);
  background: var(--gray-850);

  svg {
    width: 20px;
    height: 20px;

    :first-child {
      margin-right: 1rem;
    }

    :last-child {
      margin-left: 1rem;
    }
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
