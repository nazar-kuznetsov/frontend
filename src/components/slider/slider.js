import React, { Component } from 'react';
import Slider from 'react-slick';


class SlickSlider extends Component {
     settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       arrows: false,
       slidesToScroll: 1
     };
     render() {
       const data = this.props.data;
       // слайдер картинки prewie
       //  this.settings.customPaging = i => <img src={data[i]} alt="загрузка" />;
       return (
         <Slider {...this.settings}>
           {data.map(item => {
             return (
               <div key={item}>
                 <p>{item}</p>
               </div>
             );
           })}
         </Slider>
       );
     }
}

export default SlickSlider;
