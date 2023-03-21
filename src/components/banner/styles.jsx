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
    width: auto;
    padding: 0 2.4rem;
    height: 8rem;
    border-radius: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;

    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.purple};

    i {
      font-size: 2.4rem;
      color: ${({theme}) => theme.rose};

      -moz-animation: pulse 2s infinite linear;
      -o-animation: pulse 2s infinite linear;
      -webkit-animation: pulse 2s infinite linear;
      animation: pulse 2s infinite linear;
    }

    @-webkit-keyframes pulse {
      0% { opacity: 1; color: ${({theme}) => theme.yellow}}
      50% { opacity: 0; color: ${({theme}) => theme.rose}}
      100% { opacity: 1; color: ${({theme}) => theme.yellow}}
    }
    @-moz-keyframes pulse {
      0% { opacity: 1; color: ${({theme}) => theme.yellow}}
      50% { opacity: 0; color: ${({theme}) => theme.rose}}
      100% { opacity: 1; color: ${({theme}) => theme.yellow}}
    }
    @-o-keyframes pulse {
      0% { opacity: 1; color: ${({theme}) => theme.yellow}}
      50% { opacity: 0; color: ${({theme}) => theme.rose}}
      100% { opacity: 1; color: ${({theme}) => theme.yellow}}
    }
    @-ms-keyframes pulse {
      0% { opacity: 1; color: ${({theme}) => theme.yellow}}
      50% { opacity: 0; color: ${({theme}) => theme.rose}}
      100% { opacity: 1; color: ${({theme}) => theme.yellow}}
    }
    @keyframes pulse {
      0% { opacity: 1; color: ${({theme}) => theme.yellow}}
      50% { opacity: 0; color: ${({theme}) => theme.rose}}
      100% { opacity: 1; color: ${({theme}) => theme.yellow}}
    }
  }
`