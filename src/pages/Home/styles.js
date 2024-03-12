import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.6rem auto 7.7rem;
    grid-template-areas:
        "header"
        "content"
        "footer";

        > main {
            grid-area: content;
            justify-self: center;

            width: 100vw;
            overflow-y: auto;

    > div {
      
        width: calc(100% - 24.6rem);
        margin: 17.2rem auto;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
          
        width: calc(100% - 4.8rem);
        margin: 4.4rem auto;
    }
  
      header {
        height: 26rem;
        margin-inline: 0.1rem;
  
        border-radius: 0.8rem;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background: linear-gradient(
          180deg, 
          ${({ theme }) => theme.COLORS.GRADIENT_100} 0%, 
          ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
        );
        border-radius: 0.3rem;
        
        position: relative;

        img {
          width: 65.6rem;

          position: absolute;
          left: -7rem;
          bottom: -1.4rem;

          @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
              width: 37.6rem
            }
         
        }

        div {
          width: 42.2rem;
          position: absolute;
          top: 8.8rem;
          right: 10rem;

          color: ${({ theme }) => theme.COLORS.GRAY_200};

          @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            top: 8.8rem;
            right: -5rem;
            }

            @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            top: 8.8rem;
            right: -8rem;
            }

            @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
            top: 8.8rem;
            right: -12rem;
            }

          h1 {
            font-family: Poppins;
            font-weight: 500;
            font-size: 4rem;
            line-height: 140%;

            margin-bottom: 0.8rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
              
              font-size: 1.8rem;
              font-weight: 600;
            }
          }

          p {
            font-family: Roboto;
            font-size: 1.6rem;
            line-height: 100%;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
              
              font-size: 1.2rem;
              
            }

          }
        }
      }
    }
  }

`;

export const Content = styled.div`
     display: flex;
    flex-direction: column;
    gap: 2.4rem;
    

    margin-top: 6.2rem;

    section > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
   
  }

`

