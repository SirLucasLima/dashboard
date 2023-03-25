import styled from "styled-components";

export const Container = styled.div`
  width: 24.8rem;
  height: 18.3rem;
  padding: 2.4rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  &:nth-child(1){
    background-color: ${({theme}) => theme.rose};
  }

  &:nth-child(2){
    background-color: ${({theme}) => theme.yellow};
  }

  &:nth-child(3){
    background-color: ${({theme}) => theme.green};
  }

  h1 {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 8rem;
  }
  
  .p {
    width: 100%;
    height: 4.6rem;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    text-align: center;
    text-indent: 0;

    h3 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: ${({theme}) => theme.bgSoft};
    }
  }
`