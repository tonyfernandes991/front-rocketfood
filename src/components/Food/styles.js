import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 
  position: relative;
  z-index: 0;
  
  .section-name{
    margin-bottom: 2.3rem;
  }

  .contactorAndButton{
    padding:0;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      flex-direction:column;    
    } 
  }

  .descriptionContent {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display:none;
      }
  }

  section {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
       
    padding: 2.4rem;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      gap: 1.2rem;
    }
    
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      margin-left: 18rem;

    }

    > img {
      width: 14.6rem;
      height: 14.6rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 8.8rem;
        height: 8.8rem;
      }
      
    }
    
    > h2 {
      font-family: Poppins;
      font-size: 2.4rem;
      font-weight: 700;
      
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 1.4rem;
      }
      
    }
  
    > span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      
      font-size: 1.4rem;
      font-weight: 400;
      
    }

    > p {
      font-size: 3.2rem;
      font-weight: 400;
      
      color: ${({ theme }) => theme.COLORS.BLUE_300};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 1.6rem;
      }
    }

    > section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > button {
        width: 7.2rem;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-top: .4rem;
      }
        
      }
    }
  }

  .btn-svg{ 
    position: absolute;
    top: 32px;
    right: 11px;
    cursor: pointer;
    
    background-color:transparent;
    border:none
    
  }

`;
