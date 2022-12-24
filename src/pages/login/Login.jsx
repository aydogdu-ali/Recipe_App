import React from 'react'
import { LoginContainer, FormContainer,StyledImg, Header,StyledInput,StyledForm,StyledButton } from './Login.style'
import {useNavigate} from "react-router-dom"
import meal from "../../assets/meal.svg"
const Login = () => {

  const navigate = useNavigate();
  
  const userInfo={
    username:"ali",
    password:"ali"
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Kullanıcı bilgisini locale yazdım.
    sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate(-1)
  }




  return (
    <LoginContainer> 
      
      <FormContainer>
    <StyledImg src ={meal} > 
    </StyledImg> 
    <Header>
{"<Chef>"} Recipe
    </Header>
    <StyledForm onSubmit={handleSubmit}>
    <StyledInput placeholder=" ali giriniz" type="text" />
          <StyledInput placeholder="ali giriniz" type="password" />
          <StyledButton type="submit">Login</StyledButton>

    </StyledForm>
 
      </FormContainer>
    </LoginContainer>
    
  )
}

export default Login