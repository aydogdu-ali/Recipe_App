import React from 'react'
import { MainContainer, Card,
 Header,Image, Button } from './Cards.style'
 import defaultImage from "../../assets/default-image.jpg"
 import {Outlet, useNavigate} from "react-router-dom"

const Cards = ({recipes}) => {

  // sayfa içi yönlendirme için navigate kullandım.
  const navigate = useNavigate()

  return (
    <MainContainer wrap ="wrap">
      {recipes?.map(({recipe},index)=>{

        return (
<Card key={index}>
  <Header>{recipe.label} </Header>
  {/*Yemek fotografı varsa getir yoksa default fotografı göster*/}
  <Image src ={recipe.image || defaultImage }/>
  <Button onClick={()=>navigate("detail", {state:recipe, replace:false})}>View More</Button>

</Card>
        )

      })}
      <Outlet/>
    </MainContainer>
  )
}

export default Cards
