import styled from "styled-components";

export const Container = styled.div`
  width: 65.3rem;
  height: 8rem;

  padding: 0 2.4rem;
  border-radius: 24px;
  
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;

  background-color: ${({theme}) => theme.bgSoft};

  a {
    position: absolute;
    right: 2.4rem;
  }
`