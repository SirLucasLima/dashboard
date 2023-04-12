import styled from "styled-components";

export const Container = styled.div`
  width: 79.2rem;
  height: 39.2rem;
  border-radius: 24px;

  padding: 0 2.4rem;
  background-color: ${({theme}) => theme.bgSoft};

  .header {
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > span {
      cursor: pointer;

      &:hover{
        filter: brightness(0.8);
      }
    }

    > .title {
      width: 24.8rem;
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

  .display {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    overflow-x: scroll;
  }
`