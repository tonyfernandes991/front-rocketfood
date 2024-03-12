import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
  
  > main {
    width: 100%;
    overflow-y: auto;
    
    grid-area: content;
    justify-self: center;
  }

  .tags {
    display: flex;
    flex-wrap: row;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
    padding: 0.8rem;
    border-radius: 0.8rem;

    input {
      background-color: transparent;
    }
  }


  .save {
    display:flex;
    justify-content: flex-end;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        justify-content:center;
        width:100%;
        align-items:center;
      }
    
    > button {
      padding: 1.2rem 2.4rem;
      max-width: 17.2rem;

     

      &:disabled {
        opacity: 1;
        background-color: ${({ theme }) => theme.COLORS.RED_400};
      }
    }
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: calc(100% - 24.8rem);
  margin: 4rem 12.4rem 11.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    width: calc(100% - 12.8rem);
    margin: 2rem 6.2rem 5.4rem;
    }

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 2.4rem;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      gap: 2.4rem;
      flex-direction: column;
    }

   

    :first-of-type {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;
        }
      }

      :nth-of-type(2) {
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border-radius: 0.8rem;
    }
  }
`;

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;
      max-width: 22.9rem;

      width: 100%;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      appearance: none;
      cursor: pointer;
      
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      position: absolute;
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;
