import styled from "styled-components";

export const Container = styled.div`
  width: 92.8rem;
  height: 28.8rem;

  padding: 0 2.4rem;
  border-radius: 24px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  background-color: ${({theme}) => theme.bgSoft};

  &:hover {
    opacity: .9;
  }

  > .img {
    width: 24rem;
    height: 24rem;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .about {
    width: 61.6rem;
    height: 28.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .title {
      width: 100%;
      height: 8rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;

      .links {
        display: flex;
        gap: 2.4rem;
        
       i {
        text-shadow: 0px 4px 4px #7C05F2;
       }
      }
    }

    .textarea {
      width: 61.6rem;
      height: 18.4rem;

      overflow: scroll;

      p {
        font-size: 1.8rem;
      }
    }
  }
`