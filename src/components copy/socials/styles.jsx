import styled from "styled-components";

export const Container = styled.div`
  width: 38.4rem;
  height: 8rem;

  padding: 0 2.4rem;
  border-radius: 24px;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({theme}) => theme.bgSoft};
`