import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;

  > .left {
    width: 79.2rem;
    height: 91.2rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .header {
      display: flex;
      gap: 2.4rem;
      .photoIcons {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
      }
      
      .nameMap {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
      }
    }
  }

  > .right {
    width: 79.2rem;
    height: 91.2rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2.4rem;
  }
`