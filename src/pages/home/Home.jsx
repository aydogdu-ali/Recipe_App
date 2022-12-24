import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"
import { ImgDiv, HomeImg,HeaderText } from './Home.style';
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    }  else {
      alert("Please fill the form");
    }
  };
  console.log(recipes);

  // Bunu kullanım dışı bırakdım Çünkü kullanıcı her sorguda apiden baştan veri çekilecek.
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {/*Header da kullanacağım state bilgilerini propsla gönderiyorum */}
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
        query={query}
      />

      {/*Burda Ana sayfada sorgu yapılmadıysa resim gösteriyorum */}
      {!recipes && 
<ImgDiv> 
<HomeImg src ={homeSvg}/>
</ImgDiv>}

{/*Burda yapılan sorguda aranan sonuç yoksa bilgi veriyorum */}
{recipes?.length===0 && <HeaderText> 
  The Food can not be found</HeaderText>}

{/*Burda yapılan sorgu doğruysa kullanıcıya gösteriyorum.Bunun için propla  Card Componentine gönderiyorum */}
  {recipes?.length>0 && <Cards recipes = {recipes}/>}
    </div>
  );
};

export default Home;
