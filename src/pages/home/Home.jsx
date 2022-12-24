import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Home = () => {
  const APP_ID= "56c66d94";
  const APP_KEY ="b748a0cefd89b21ec128cd38783d9530";
  const [query, setQuery] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  // const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


  const getData= async()=>{
    const {data} = await axios(url)
    // console.log(data)
    setRecipes(data.hits);
   
  }
  console.log(recipes)

useEffect(() => {
  getData()
 
}, [])


  return (
    <div>
      Home
    </div>
  )
}

export default Home
