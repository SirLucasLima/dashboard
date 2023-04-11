import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 2.4rem;

  overflow-y: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`