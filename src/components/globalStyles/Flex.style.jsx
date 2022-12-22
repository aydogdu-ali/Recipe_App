import styled from "styled-components";

//styled-components yapısı ile her yerde kullanabileceğimiz ortalama amaçlı bir component oluşturdum.
export const Flex = styled.div`
  display: flex;
   
    /*örnegin propsta attirube olarak space-between varsa onu al yoksa justify-center'i al demiş oluyorum*/
  
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;
