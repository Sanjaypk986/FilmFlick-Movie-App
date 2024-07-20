import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import useScrollToTop from '../hooks/useScrollToTop'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { changeLogginStatus, userLoginId } from '../features/login/loginSlice'


const Root = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.login.isLogin);
  // Root.jsx
  useEffect(() => {
    const verify = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`, { withCredentials: true });
        const verifyLogin = response.data.verified;
        const loginUserId = response.data.userId;
  
        console.log("Verified:", verifyLogin);
        console.log("User ID:", loginUserId);
  
        dispatch(changeLogginStatus(verifyLogin));
        dispatch(userLoginId(loginUserId));
      } catch (error) {
        console.log(error);
      }
    };
    verify();
  }, [dispatch]);
  

  
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
