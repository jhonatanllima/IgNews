import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1120px;

  div {
    max-width: 720px;
    margin: 5rem auto 0;

    a {
      display: block;

      + a {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--gray-700);
      }
    }

    time {
      font-size: 1rem;

      display: flex;
      align-items: center;
      color: var(--gray-300);
    }

    strong {
      margin-top: 1rem;

      display: block;

      font-size: 1.5rem;
      line-height: 2rem;
      transition: color 0.2s;

      :hover {
        color: var(--yellow-500);
      }
    }

    p {
      margin-top: 0.5rem;

      color: var(--gray-300);
      line-height: 1.625rem;
    }
  }
`;
