import React, { Component } from 'react';
import img from './images/1.jpg'
import img1 from './images/2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, onClickThumb} from 'react-responsive-carousel';
import '../App.css';
export default class ControlledCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay onClickThumb={false}>
      <div>
        <img src={img} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      <div>
        <img src={img1} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      <div>
        <img src={require('./images/3.jpg')} />
        <p className="legend">Your word is lamp of my feet ,<br/>A light on my path</p>
      </div>
      
    </Carousel>
    )
  }
}
