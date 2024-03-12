import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 140%;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
`;
