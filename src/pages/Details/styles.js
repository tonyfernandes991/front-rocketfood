import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.4rem auto 7.7rem;
    grid-template-areas:
    "header"
    "content"
    "footer";

    > main {
    grid-area: content;
    justify-self: center;
    width: 100%;
    overflow-y: auto;


    > div {
      width: calc(100% - 24.4rem);
      margin: 3.2rem 12.2rem 15.5rem;
    }
}
.sectionBtn{
  align-items:center; 
}

.buttons {
    display: flex;
    justify-content: initial;
    gap: 3.3rem;
    margin-top: 2.4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
  display:flex;
  flex-direction: column;
  align-items:justify;
  justify-content:center;
  }
  }

  .edit {
    padding: 1.2rem 2.4rem;
    max-width: 13.1rem;
  }

  .include {
    max-width: fit-content;
    gap: 0.5rem;
    border-radius: 0.3rem;
    padding: 1.2rem 2.4rem;

    font-size: 1%.4rem;
    line-height: 2.4rem;

    svg {
      width: 2.2rem; 
      height: auto;
    }
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4.7rem;
  margin-top: 4.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
  display:flex;
  flex-direction: column;
  align-items:justify;
  justify-content:center;
  }

  > img {
    width: 100%;
    max-width: 39rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    text-align: left;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    text-align: center;
    }

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    p {
      font-family: "Poppins", sans-serif;
      line-height: 140%;
      font-size: 2.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.2rem;
      justify-content: initial;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
      display:flex;
      justify-content:center;
      }
    }
  }

  `

