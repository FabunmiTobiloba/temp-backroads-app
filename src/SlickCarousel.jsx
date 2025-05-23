import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaQuoteRight} from 'react-icons/fa'
import {list} from './data'
//import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


import Slider from 'react-slick'
const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // only works when slidesToShow is equal to 1
        autoplay: true,
        autoplaySpeed:1000,
        pauseOnHover: true
      };
  return (
    <section className='slick-container'>
    <Slider {...settings}>
      {/* <p>{people[currentPerson].name}</p> */}
      {/* the above is another way we can go about this without using map */}
      {list.map((person)=>{
        const{id,image,name,title,quote} = person
        return (
            <article key={id}>
                <img src={image} alt={name} className='person-img' />
                <h5 className='name'>{name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                
                <FaQuoteRight className='icon'/>
            </article>
        )
      })}

    </Slider>
    </section> 
 
  )
}

export default SlickCarousel
