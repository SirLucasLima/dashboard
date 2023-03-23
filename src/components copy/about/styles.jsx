import styled from "styled-components";

export const Container = styled.div`
  width: 79.2rem;
  height: 39.2rem;
  border-radius: 24px;

  padding: 0 2.4rem;

  background-color: ${({theme}) => theme.bgSoft};

  > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8rem;
    
    .resume {
      cursor: pointer;

      display: flex;
      gap: .8rem;
      align-items: center;

      i {
        font-size: 2.4rem;
        color: ${({theme}) => theme.textColorSoft};
      }

      &:hover{
        filter: brightness(0.8);
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    gap: 3.6rem;

    p {
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 3.6rem;
  
      text-align: justify;
      text-indent: 4rem;
  
      color: ${({theme}) => theme.textColorSoft};
    }
  }
`