import styled from "styled-components";

export const Container = styled.div`
  width: 65.3rem;
  height: 80.8rem;
  padding: 0 2.4rem;

  border-radius: 24px;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 2.4rem;

  overflow-y: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  background-color: ${({theme}) => theme.bgSoft};
`