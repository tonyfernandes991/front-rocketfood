import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`

  grid-area: header;

  height: 10.4rem;
  width: 100%;
  padding: 2.4rem 12.3rem;  
  
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 2.8rem;

    div:nth-child(3) {
    display: none;
  }
      
      }
 

  button:last-child {
    width: auto;
    padding: 0;
    background: none;
  }
  inputSearch{
    display:none;
  }
  
  .adminClass {
    display:flex;
    flex-direction:column;
    align-items: flex-end;

    > span{
      color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      flex-direction:row;
      align-items: center;
      
      }
  }

  .new , .orders {
      max-width: 21.6rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         display:none;
      }
    }

    .button-costumer-mobile{
      display:none;
      position:relative;
      border:none;
      background-color:transparent;
      color:white;

      

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         display:flex;
         align-items:center;
          align-self:center;

        
    }
  }
    
    .icon-receipt-customer{
      display:none;
      
      background: none;
      font-size: 2.4rem;

     
      

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         display:flex;
         align-items:center;
          align-self:center;
         
      }
    }

    .icon-receipt{
      display:none;
      background-color:transparent;
      color:transparent;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         display:block;
      }
      
    }
  
`;


export const Menu = styled.button`
  border: none;
  background: none;
  font-size: 2.4rem;
  display:none;
  align-items: center;
  gap: 1.6rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        justify-content:center;
      
      }

  /* span {
    font-size: 2.1rem;
  } */

  
`;

// export const MenuClose = styled.button`
//   border: none;
//   background: none;
//   font-size: 2.4rem;
//   display:none;
//   align-items: center;
//   gap: 1.6rem;

//   color: ${({ theme }) => theme.COLORS.WHITE};

//   @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
//         display: flex;
//         justify-content:center;

//       }

//   /* span {
//     font-size: 2.1rem;
//   } */ 
// `;


export const Brand = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 19.7rem;
  }


`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
 
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
          display: none;

      }
`;