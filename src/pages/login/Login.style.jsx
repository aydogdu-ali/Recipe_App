import styled from "styled-components";
import { Flex } from "../../components/globalStyles/Flex.style";

// Burada daha önce globalStyles klasöründe oluşturduğumuz Flex componentinden özelliklerini yeni oluşturduğumuz "LoginContainer" componentine alıyoruz ve başka özellikler ekleyebiliriz.
export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url('https://picsum.photos/1600/900');
  background-size: cover;
  background-position: center;
 
`;
