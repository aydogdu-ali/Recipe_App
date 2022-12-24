import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';

// Bu componenette eğer kullanıcı giriş yapmışşsa göstereceğim componenetleri tanımlamak için  PrivateRouter oluşturuyorum.
const PrivateRouter = () => {

  // Burda kullanıcı varmış gibi simüle ettim.
  const userinfo= true
  return (
    <div>

{/*Kullanıcı varsa tıkladığı sayfayı görecek yoksa giriş işlemi için login olacak*/}
    {userinfo ? <Outlet/>: <Navigate to ="/login"/> }
    </div>
  )
}

export default PrivateRouter