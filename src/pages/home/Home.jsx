import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"
import { ImgDiv, HomeImg,HeaderText } from './Home.style';
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY =process.env.REACT_APP_APP_KEY;
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


  // Api den veri çekme fonksiyonunu tanımladım
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
