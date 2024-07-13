import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };
  return (
    <section className='py-3'>
      <div className='p-2 '>
      <Slider {...settings}>
      <img className='w-full rounded-md' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="Ad image" />
      </Slider>
      </div>
    </section>
  )
}

export default Banner
