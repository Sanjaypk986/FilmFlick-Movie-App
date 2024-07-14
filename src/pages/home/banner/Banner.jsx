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
    <section className='pb-4  my-3 overflow-hidden'>
      <div className='p-2 '>
      <Slider {...settings}>
      <img className='w-full rounded-md' src="https://assetscdn1.paytm.com/images/catalog/view_item/2753828/1720788936964.jpg?format=webp&imwidth=1750" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assetscdn1.paytm.com/images/catalog/view_item/2755093/1720681654392.jpg?format=webp&imwidth=1750" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assetscdn1.paytm.com/images/catalog/view_item/2695834/1718274370943.jpg?format=webp&imwidth=1750" alt="Ad image" />
      <img className='w-full rounded-md' src="https://assetscdn1.paytm.com/images/catalog/view_item/2699999/1719408000464.jpg?format=webp&imwidth=1750" alt="Ad image" />
      </Slider>
      </div>
    </section>
  )
}

export default Banner
