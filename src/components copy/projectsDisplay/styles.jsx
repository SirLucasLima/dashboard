import styled from "styled-components";

export const Container = styled.div`
  width: 79.2rem;
  height: 39.2rem;
  border-radius: 24px;

  padding: 0 2.4rem;

  background-color: ${({theme}) => theme.bgSoft};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8rem;
    
    > span, h1, i {
      cursor: pointer;

      &:hover{
        filter: brightness(0.8);
      }
    }

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