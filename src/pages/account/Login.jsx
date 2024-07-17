import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/forms/LoginForms'

const Login = () => {
  return (
    <main className='flex justify-center'>
        <section className='container mx-auto mt-6'>
          <div className='my-2 sm:my-4 md:w-1/2 mx-auto flex flex-col justify-center items-center'>
          <h3 className='text-lg md:text-2xl  text-gray-800 font-semibold my-6 text-center'>Login To Your  Account</h3>
          <LoginForm/>
          <p className='text-gray-600 my-4 whitespace-nowrap'>Create an account <Link to={'/signup'} className='font-semibold md:text-lg text-red-500 py-1 px-3 rounded-md '>Signup</Link></p>
          </div>

        </section>
    </main>
  )
}

export default Login
