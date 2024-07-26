import React from 'react'
import "./Premiere.css"
import PremiereMovies from './premiereMovies'
const Premiere = () => {
  return (
    <section className='premiere-section pb-3'>
        <div className='container mx-auto'>
            <div>
                <img  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="play image" />
            </div>
        </div>
       <PremiereMovies />
      
    </section>
  )
}

export default Premiere
