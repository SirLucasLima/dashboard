import styled from "styled-components";

export const Container = styled.div`
  width: 38.4rem;
  height: 38.8rem;
  border-radius: 24px;
  overflow: hidden;

  background-color: ${({theme}) => theme.bgSoft};

  > img {
    width: 100%;
    height: 100%;
  }
`