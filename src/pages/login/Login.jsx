import React, { useContext } from 'react'
import { LoginContainer, FormContainer,StyledImg, Header,StyledInput,StyledForm,StyledButton } from './Login.style'
import {useNavigate} from "react-router-dom"
import meal from "../../assets/meal.svg"
import { LoginContext } from '../../contex/LoginContext'
const Login = () => {

  const {user, setUser} = useContext(LoginContext)

  const navigate = useNavigate();
  
  const userInfo={
   user
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
    <StyledInput placeholder=" ali giriniz" type="text" 
    value={user?.username || ""}
    onChange = {(e)=> setUser({...user, username:e.target.value})}/>
          <StyledInput placeholder="ali giriniz" type="password" 
          value={user?.password || ""}
           onChange = {(e)=> setUser({...user, password:e.target.value})}/>
          <StyledButton type="submit"
          >Login</StyledButton>

    </StyledForm>
 
      </FormContainer>
    </LoginContainer>
    
  )
}

export default Login