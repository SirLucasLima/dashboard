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

  .input {
    width: 51.7rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: .8rem;
    gap: 1.6rem;

    border: 1px solid ${({theme}) => theme.links};
    border-radius: 24px;

    i {
      text-shadow: 0px 4px 4px #7C05F2;
    }

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