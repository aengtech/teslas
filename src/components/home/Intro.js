import React from 'react';


import stars from '../../img/stars2.png'
import city from '../../img/city.png'
import car from '../../img/car.png'
import car1 from '../../img/car1.png'
import car2 from '../../img/car2.png'
import car3 from '../../img/car3.png'

const Intro = () => {
  return (
    <section>
       <img src={stars} alt="stars" id="stars" />
       <h2 id="text"> The Future Of Cars </h2>
       <img src={city} alt="city" id="city"/>
       <img src={car} alt="car" id="fly"  />
       <img src={car1} alt="car1" id="float"  />
       <img src={car2} alt="car2" id="drive" />
       <img src={car3} alt="car3" id="drove" />
    </section>
  )
}

export default Intro;
