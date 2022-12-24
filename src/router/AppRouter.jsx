import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { GlobalStyles } from '../components/globalStyles/GlobalStyles'
import Navbar from '../components/nav/Navbar'
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Register from "../pages/register/Register"
import Detail from "../pages/detail/Detail"
import Login from "../pages/login/Login"
import PrivateRouter from './PrivateRouter'


// Bu komponenti App.js dosyası kullanacağım için Router işlemlerini bu componentte yaptım.
const AppRouter = () => {
  return (
    <BrowserRouter>
    {/*Her sayfada göstereceğim componenetleri Routes'un üst kısmına yazıyorum.*/}
    {/*Global stileri her componente kullanmak için çağırıyorum*/}
    <GlobalStyles/>
    <Navbar/>
      <Routes>
<Route path = "/" element ={<Home/>}/>

{/*PrivateRouter ile kullanıcı girişi varsa About ve Detail Sayasını görebilecek yoksa login olması gerektiği için logine yönlendirdim.*/}
<Route path = "/about" element ={<PrivateRouter/>}>
<Route path = "" element ={<About/>}/>
</Route>
<Route path = "/detail" element ={<PrivateRouter/>}>
<Route path = "" element ={<Detail/>}/>

  </Route>
<Route path = "/login" element ={<Login/>}/>

<Route path = "/register" element ={<Register/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
