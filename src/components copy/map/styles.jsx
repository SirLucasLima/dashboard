import styled from "styled-components";

export const Container = styled.div`
  width: 38.4rem;
  height: 38.8rem;
  padding: 0 2.4rem;
  border-radius: 24px;

  background-color: ${({theme}) => theme.bgSoft};

  display: flex;
  flex-direction: column;
  text-align: start;

  > .header {
    height: 8rem;
    display: flex;
    align-items: center;
  }

  > .map {
    width: 33.6rem;
    height: 28.4rem;
    border-radius: 24px;

    overflow: hidden;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`