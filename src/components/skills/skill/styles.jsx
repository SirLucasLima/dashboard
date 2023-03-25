import styled from "styled-components";

export const Container = styled.div`
  width: 13.325rem;
  height: 21.325rem;

  .img {
    width: 13.325rem;
    height: 13.325rem;

    border-radius: 24px;

    img {
      width: 100%;
      height: 100%;
      
      object-fit: scale-down;
    }
  }

  .title {
    width: 13.325rem;
    height: 8rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      line-height: 2.4rem;
    }
  }
  
`