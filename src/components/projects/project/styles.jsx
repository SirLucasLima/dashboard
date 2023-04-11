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

        a {
          position: relative;

          &:before {
            content: attr(data-hover);
            visibility: hidden;
            opacity: 0;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            font-weight: 400;
            font-size: 1.8rem;
            line-height: 3.6rem;
            outline: none;
            word-break: keep-all;

            color: ${({theme}) => theme.bg};

            border-radius: 24px;
            padding: .8rem;

            position: absolute;
            z-index: 99;
            left: -2.4rem;
            top: 4rem;
          }
          
          &:hover:before {
            visibility: visible;
            opacity: 1;
          }

          &:nth-child(1):before {
            color: ${({theme}) => theme.textColor};
            background-color: ${({theme}) => theme.rose};
          }
          
          &:nth-child(2):before {
            background-color: ${({theme}) => theme.yellow};
          }
          
          &:nth-child(3):before {
            color: ${({theme}) => theme.textColor};
            background-color: ${({theme}) => theme.green};
          }
          
          &:nth-child(4):before {
            color: ${({theme}) => theme.textColor};
            background-color: ${({theme}) => theme.purple};
          }
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