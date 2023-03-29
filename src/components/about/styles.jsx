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
        text-shadow: 0px 4px 4px #7C05F2;
      }

      &:hover{
        filter: brightness(0.8);
      }
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    height: 28.8rem;
    gap: .8rem;
    overflow: scroll;
  }
`