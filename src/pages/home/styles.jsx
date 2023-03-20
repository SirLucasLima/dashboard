import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.whitesmoke};

  display: grid;
  grid-gap: 2.4rem;
  
`