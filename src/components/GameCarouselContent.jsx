import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import DarkVader from '../assets/Images/GameCarousel/darkvader.svg';
import SneakPeek from '../assets/Images/GameCarousel/sneakpeeks.svg';
import SpaceWomen from '../assets/Images/GameCarousel/space-women.svg';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const GameCarouselContent = () => {
  const images = [DarkVader, SneakPeek, SpaceWomen];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <GameCarouselStyled>
      <div className='game-carousel-container'>
        <div className='game-carousel-header'>
          <h1>Choose your <span className='gradient-text'>favourite</span> games</h1>
          <p>
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about the release.
          </p>
        </div>
        <div className='game-carousel-center'>
          <div className='game-carousel-swipe' ref={carouselRef}>
            {images.map((image, index) => (
              <div className='col-lg-12' key={index}>
                <div className='card w-500'>
                  <img src={image} alt='' />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='game-buttons'>
          <PrimaryButton name='View all' />
          <SecondaryButton name='Play Now' />
        </div>
      </div>
    </GameCarouselStyled>
  );
};

const GameCarouselStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .gradient-text {
    background: linear-gradient(90deg, #6542F4 43.84%, #F976FF 68.39%, #B50098 91.97%);background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .game-carousel-header {
    margin: auto;
    text-align: center;
  }

  .game-carousel-center {
    overflow: hidden;

    .game-carousel-swipe {
      display: flex;
      transition: transform 0.5s ease;
      width: ${(props) => props.width}px; /* Width based on the number of images */

      .col-lg-12 {
        flex: 0 0 auto;
      }
    }
  }
  .game-buttons {
    display: inline-flex;
  }
`;

export default GameCarouselContent;
