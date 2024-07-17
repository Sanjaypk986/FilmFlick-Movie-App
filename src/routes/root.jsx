import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import useScrollToTop from '../hooks/useScrollToTop'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { changeLogginStatus } from '../features/login/loginSlice'


const Root = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.login.isLogin);
  useEffect(() => {
    const verify =async ()=>{
      try {
        const response = await axios.get(`http://localhost:3000/auth/verify`,{withCredentials:true})
        const verifyLogin = response.data.verified
        console.log(verifyLogin);
        dispatch(changeLogginStatus(verifyLogin))
      } catch (error) {
        console.log(error);
      }
    }
    verify()
  }, [])
  
  useScrollToTop();
  return (
    <>
    <Header isLoggedIn= {isLoggedIn} />
    <Outlet />
    <Footer />
      
    </>
  )
}

export default Root
