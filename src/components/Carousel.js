import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import db from '../db';

export default class Carousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={db.length}
        interval={5000}
        isPlaying={true}
      >
        <Slider>
          {db.map((dbItem, index) => (
            <Slide index={index} key={dbItem.id}>
              <img alt="aloha-img" src={dbItem.imagePath} />
            </Slide>
          ))}
        </Slider>
        <ButtonBack> {'<'} </ButtonBack>
        <ButtonNext> {'>'} </ButtonNext>
      </CarouselProvider>
    );
  }
}
