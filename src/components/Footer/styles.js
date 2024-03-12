import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;
  padding: 2.4rem 12.3rem;

  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 2.8rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 18.6rem;
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
  
`;