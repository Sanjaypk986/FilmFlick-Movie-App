import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeLogginStatus } from '../../features/login/loginSlice'

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const logout = async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/auth/logout`,{withCredentials:true})
                dispatch(changeLogginStatus(false))
                navigate('/')

            } catch (error) {
                console.log(error);
            }
        }
        logout()
    }, [])
    
  return (
    <main className='flex justify-center items-center'>
        <section className='container mx-auto flex justify-center items-center px-2'>
            <h2 className='text-gray-700 text-lg md:text-2xl'>Logging Out....</h2>
        </section>
    </main>
  )
}

export default Logout
