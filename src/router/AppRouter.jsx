import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'



// Bu komponenti App.js dosyası kullanacağım için Router işlemlerini bo componentte yaptım.
const AppRouter = () => {
  return (
    <BrowserRouter>
    {/*Her sayfada göstereceğim componenetleri Routes'un üst kısmına yazıyorum.*/}
    <Navbar/>
      <Routes>
<Route/>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
