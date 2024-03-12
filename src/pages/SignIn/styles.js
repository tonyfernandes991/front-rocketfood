import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  margin-inline: 13.1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    margin-inline: 4.7rem;
    }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){

      flex-direction: column;
      align-items:center;
      justify-content:center;
      
  }
`;

export const Brand = styled.div`
  display: flex;
  width: 100%;

  > img {
    width: 100%;
    max-width: 32.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      
      flex-direction: column;
      align-items:center;
      justify-content:center;
      margin-bottom: 7.3rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width:47.6rem;
  max-height:62rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    background-color: transparent;
    padding: 0;

    }

  > h2 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      text-align: center;
  }

  > section h2 {
    margin-bottom: 0.8rem;
  }

  > section input {

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    font-size: 1.6rem;
    border-radius: 0.5rem;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    > h2 {
      display:none;
    }

}

`;
