import styled from "styled-components";
import {Flex} from "../globalStyles/Flex.style"
import {Link} from "react-router-dom" 

export const Nav = styled(Flex)`
padding:1rem 1.5rem;
`;

export const Brand = styled(Link)`
padding: 1rem 0;
color: ${({ theme }) => theme.colors.logoColor};
text-decoration: none;
font-weight: 800;
font-size: 2rem;
`;

export const Menu = styled(Flex)`
 @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen})=> isOpen ? "400px": "0"};
    overflow: hidden;
  }
`;

export const MenuLink = styled(Link)`
text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.logoColor};
  transition: all 0.3s ease-in;
  &:hover {
    
   transform: scale(0.97);
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
 

`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
  
`;
