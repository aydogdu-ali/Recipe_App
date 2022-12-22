import styled from "styled-components";
import { Flex } from "../../components/globalStyles/Flex.style";

// Burada daha önce globalStyles klasöründe oluşturduğumuz Flex componentinden özelliklerini yeni oluşturduğumuz "LoginContainer" componentine alıyoruz ve başka özellikler ekleyebiliriz.
export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background-color: rgb(0, 13, 23, 0.4);
  box-shadow: 1px 2px 2px 1px;
  border: 2px solid black;
  border-radius: 50%;
  flex-direction: column;
`;
export const Header = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 16rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`

  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;

