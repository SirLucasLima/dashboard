import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2.4rem;

  > .left {
    width: 92.8rem;
    height: 91.2rem;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2.4rem;
    overflow: hidden;
  }

  .right {
    width: 65.3rem;
    height: 91.2rem;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2.4rem;
    overflow: hidden; 
  }
`