import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import { LoginContext } from '../contex/LoginContext';

// Bu componenette eğer kullanıcı giriş yapmışşsa göstereceğim componenetleri tanımlamak için  PrivateRouter oluşturuyorum.
const PrivateRouter = () => {

  // Burda kullanıcı giriş yapmışsa detail ve about sayfasını görmüş olacak.
  const {user} = useContext(LoginContext)
 
  return (
    <div>

{/*Kullanıcı varsa tıkladığı sayfayı görecek yoksa giriş işlemi için login olacak*/}
    {user ? <Outlet/>: <Navigate to ="/login"/> }
    </div>
  )
}

export default PrivateRouter