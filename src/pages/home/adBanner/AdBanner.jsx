import React from 'react'
import ad1Image from '../../../assets/banners/ad1.PNG';
const AdBanner = () => {
  return (
    <section className=' bg-gray-200  py-4 md:py-10'>
        <div className='container px-2  mx-auto felx justify-center items-center '>
        <img className='w-full rounded-lg max-h-24 shadow-lg' src={ad1Image} alt="Ad Banner" />
        </div>
    </section>
  )
}

export default AdBanner
