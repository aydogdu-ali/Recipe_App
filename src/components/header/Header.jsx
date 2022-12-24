import React from 'react'
import "./Header.style";
import { HeaderContainer,MainHeader,FormContainer, FoodInput, Button , Select } from './Header.style'

const Header = ({setQuery, query,setSelectedMeal, mealType, getData}) => {

 

  const handleSubmit = (e)=>{
    e.preventDefault()
    getData()
  }


  return (
    <div>
     < HeaderContainer>

     <MainHeader>
      Recipe App
     </MainHeader>

     <FormContainer onSubmit = {handleSubmit}>
<FoodInput type="text" placeholder ="search" onChange ={(e)=>setQuery(e.target.value)} 
value={query}/>

<Button type = "submit">
  Search
</Button>
<Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
     </FormContainer>
     </HeaderContainer>
    </div>
  )
}

export default Header
