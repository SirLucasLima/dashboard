import styled from "styled-components";

export const Container = styled.div`
  min-width: 24.8rem;
  height: 28.8rem;
  border-radius: 24px;

  overflow: hidden;
  position: relative;

  background-color: ${({theme}) => theme.bgSoft};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover{
    &:nth-child(3n-2){
    background-color: ${({theme}) => theme.rose};
    }

    &:nth-child(3n-1){
      background-color: ${({theme}) => theme.yellow};

      span {
       color: ${({theme}) => theme.bgSoft};
      }
    }

    &:nth-child(3n-3){
      background-color: ${({theme}) => theme.green};
    }

    .readmore {
      opacity: 1;
    }
  }
  
  > img {
    width: 100%;
    height: 100%;

    object-fit: scale-down;
  }

  > .readmore {
    opacity: 0.5;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 2.4rem 0;

    top: 0;
    left: 0;

    z-index: 999;

    span {
      color: ${({theme}) => theme.textColor};
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3.5rem;
    }
  }
`