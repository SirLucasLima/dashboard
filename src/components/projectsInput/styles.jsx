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

  > .left {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    a {
      &:active {
        transform: scale(0.98);
      }

      &:active:after {
        transform: scale(0.98);
      }
    }

    .title {
      width: 23.2rem;
      height: 4.8rem;
      overflow: hidden;

      display: flex;
      align-items: center;
      padding: 0 1.6rem;
      gap: 1.6rem;

      border-radius: 24px;
      background-color: ${({theme}) => theme.bgSoft};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      }
      
      select {
        cursor: pointer;
        border: none;
        outline: none;
        padding-right: 2rem;
        width: 100%;
        height: 100%;
        background-color: ${({theme}) => theme.bgSoft};
        
        option {
          appearance: none;
          border: none;
          outline: none;
          cursor: pointer;
          background-color: ${({theme}) => theme.bgSoft};
          color: ${({theme}) => theme.textColor};
        }
      }
    }
  }


  > .input {
    width: 24.8rem;
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