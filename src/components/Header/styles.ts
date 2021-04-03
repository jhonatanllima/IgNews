import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);

  div {
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 1120px;

    display: flex;
    align-items: center;

    nav {
      height: 5rem;
      margin-left: 5rem;

      a {
        position: relative;

        height: 5rem;
        padding: 0 0.5rem;

        display: inline-block;

        line-height: 5rem;
        transition: color 0.2s;
        color: var(--gray-300);

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          color: var(--white);
        }

        &.isActive {
          font-weight: bold;
          color: var(--white);
        }

        &.isActive::after {
          left: 0;
          bottom: 1px;
          position: absolute;

          content: "";
          width: 100%;
          height: 3px;
          border-radius: 3px 3px 0 0;

          background: var(--yellow-500);
        }
      }
    }
  }
`;
