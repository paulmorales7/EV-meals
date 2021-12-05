import React from "react";
import '../Main/main.css';
import veganFood from '../../images/vegan_flick-removebg.png';

const Main = () => {
    return (

        <div className='section'>
            <div className='info'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Tempora, recusandae?</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>

            <div className='pic'>                   
              <img className='image' src={veganFood}/>
            </div>

        </div>


    )
}

export default Main;