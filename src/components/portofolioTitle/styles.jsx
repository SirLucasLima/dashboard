import styled from "styled-components";

export const Container = styled.div`
  width: 92.8rem;
  height: 8rem;

  padding: 0 2.4rem;
  border-radius: 24px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.bgSoft};

  > .title {
    display: flex;
    gap: 2.4rem;
    align-items: center;

    i {
      font-size: 2rem;
      color: ${({theme}) => theme.textColor};
    }
    
    h1, i {
      cursor: pointer;
  
      &:hover{
        filter: brightness(0.8);
      }
    }
  }


  > .input {
    width: 51.7rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 1.6rem;
    gap: 1.6rem;

    border: 1px solid ${({theme}) => theme.links};
    border-radius: 24px;

    input {
      width: 100%;
      background: transparent;
      border: 0;

      &:placeholder {
        color: ${({theme}) => theme.links};
      }
    }
  }
`