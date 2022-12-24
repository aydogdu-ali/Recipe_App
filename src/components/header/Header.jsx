import React from 'react'
import "./Header.style";
import { HeaderContainer,MainHeader,FormContainer, FoodInput, Button , Select } from './Header.style'

const Header = ({setQuery, query,setSelectedMeal, mealType, getData}) => {

 
// form doldurulunca enter ya da  search tuşuna basınca çalışacak olan fonksiyonu yazdın.Burda her kullanıcı arayışında apı den veri çekilecek. 
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
      {/*inputa girilen veriyi yakalıyorum*/}
<FoodInput type="text" placeholder ="search" onChange ={(e)=>setQuery(e.target.value)} 
value={query}/>

<Button type = "submit">
  Search
</Button>
<Select
          name="mealType"
          id="mealType"
           /*şeçilen öğünü yakalıyorum*/ 
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {/*Öğünleri tanımladım*/}
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
