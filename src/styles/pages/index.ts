import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1120px;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    max-width: 600px;

    > span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    h1 {
      margin-top: 2.5rem;

      font-weight: 900;
      font-size: 4.5rem;
      line-height: 4.5rem;

      span {
        color: var(--cyan-500);
      }
    }
  }

  p {
    margin-top: 1.5rem;

    font-size: 1.5rem;
    line-height: 2.5rem;

    span {
      font-weight: bold;
      color: var(--cyan-500);
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;
