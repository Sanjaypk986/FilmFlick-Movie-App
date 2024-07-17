import React from 'react'
import SignupForm from '../../components/forms/SignupForm'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main className='flex justify-center'>
        <section className='container mx-auto mt-6'>
          <div className='my-2 sm:my-4 md:w-1/2 mx-auto flex flex-col justify-center items-center'>
          <h3 className='text-lg md:text-2xl  text-gray-800 font-semibold my-6 text-center'>Create  Account</h3>
          <SignupForm/>
          <p className='text-gray-600 my-4 whitespace-nowrap'>Already have an account <Link to={'/login'} className='font-semibold md:text-lg text-red-500 py-1 px-3 rounded-md '>Login</Link></p>
          </div>

        </section>
    </main>
  )
}

export default SignUp
