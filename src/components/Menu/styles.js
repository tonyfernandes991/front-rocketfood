import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display:none;

  > header {
    background-color:${({theme}) =>  theme.COLORS.BACKGROUND_700};

    button {
      position: absolute;
      left: 2.8rem;
      top: 6rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
          display: none;

          &[data-menu-is-open="true"] {
            display:grid;
           
          }
      
      }

  > main {
    grid-area: content;
    justify-self: center;

    width: calc(100% - 5.6rem);
    margin: 3.6rem 2.8rem 1.4rem;

    > div {
      margin-bottom: 3.6rem;

      input {
        max-width: 100%;
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
      
      font-weight: 300;
    }
  }

`;

export const MenuClose = styled.button`
  border: none;
  background: none;
  font-size: 2.1rem;
  display:none;
  align-items: center;
  gap: 1.6rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        justify-content:center;
      
      }

`;
