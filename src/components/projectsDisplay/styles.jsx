import styled from "styled-components";

export const Container = styled.div`
  width: 79.2rem;
  height: 39.2rem;
  border-radius: 24px;

  background-color: ${({theme}) => theme.bgSoft};

  padding: 0 2.4rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8rem;

    > .title {
      display: flex;
      gap: 2.4rem;
      align-items: center;

      i {
        font-size: 3rem;
        color: ${({theme}) => theme.textColor};
      }
    }
  }

  .display {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2.4rem;
  }
`