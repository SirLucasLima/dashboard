import styled from "styled-components";

export const Container = styled.div`
  width: 79.2rem;
  height: 28.8rem;
  border-radius: 24px;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  background-color: ${({theme}) => theme.bgSoft};

  h1 {
    font-weight: 700;
    font-size: 5.8rem;
    line-height: 7.2rem;
  }

  button {
    width: 13.8rem;
    height: 8rem;
    border-radius: 24px;

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;

    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.purple};
  }
`