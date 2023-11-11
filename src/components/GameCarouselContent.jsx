import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import StreetSamari from '../assets/Images/GameCarousel/street-samari.jpeg';
import SneakPeeks1 from '../assets/Images/GameCarousel/sneak-peeks1.svg';
import SpaceWomen from '../assets/Images/GameCarousel/space-women.svg';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const GameCarouselContent = () => {
  const images = [StreetSamari, SneakPeeks1, SpaceWomen];
  const [selectedIndex, setSelectedIndex] = useState(1); // Index of the initially selected item

  const moveToSelected = useCallback(
    (direction) => {
      if (direction === 'next') {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (direction === 'prev') {
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    },
    [setSelectedIndex, images.length]
  );

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.which) {
        case 37: // left
          moveToSelected('prev');
          break;

        case 39: // right
          moveToSelected('next');
          break;

        default:
          return;
      }
      e.preventDefault();
    },
    [moveToSelected]
  );

  useEffect(() => {
    // Attach the keydown event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <GameCarouselStyled>
      <div className='game-carousel-header'>
        <h1>
          Choose your <span className='gradient-text'>favourite</span> games
        </h1>
        <p className='carousel-header-text'>
          Offer sneak peeks and previews of upcoming games, including trailers,
          screenshots, and information about the release.
        </p>
      </div>
      <div className='game-carousel-main'>
        <div className='game-carousel-slider'>
          {images.map((image, index) => (
            <CardStyled
              key={index}
              className={
                index === selectedIndex
                  ? 'selected'
                  : index ===
                    (selectedIndex - 1 + images.length) % images.length
                  ? 'prev'
                  : index === (selectedIndex + 1) % images.length
                  ? 'next'
                  : 'hideLeft'
              }
            >
              <img src={image} alt='' />
            </CardStyled>
          ))}
        </div>
      </div>
      <StyledButtons>
        <StyledButton onClick={() => moveToSelected('prev')}>Prev</StyledButton>
        <StyledButton onClick={() => moveToSelected('next')}>Next</StyledButton>
      </StyledButtons>
      <div className='game-buttons'>
        <PrimaryButton name='View all' />
        <SecondaryButton name='Play Now' />
      </div>
    </GameCarouselStyled>
  );
};

const GameCarouselStyled = styled.div`
  margin: 0;
  padding: 0;

  .game-carousel-header {
    text-align: center;
    padding: 3rem;
    margin: auto;
    width: 70%;

    .carousel-header-text {
      margin: auto;
      width: 70%;
      font-size: 16px;
    }
  }

  .gradient-text {
    background: linear-gradient(
      90deg,
      #6542f4 43.84%,
      #f976ff 68.39%,
      #b50098 91.97%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .game-carousel-main {
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    padding: 0;
  }

  .game-carousel-slider {
    position: relative;
    height: 450px;
    overflow: hidden;
  }

  .game-buttons {
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CardStyled = styled.div`
  position: absolute;
  transition: transform 1s, left 1s, opacity 1s, z-index 0s;
  opacity: 1;

  img {
    width: 450px;
    height: 300px;
    transition: width 1s;
    object-fit: cover;
  }

  &.prev {
    z-index: 5;
    left: 25%;
    transform: translateY(50px) translateX(-50%);

    img {
      width: 300px;
    }
  }

  &.selected {
    z-index: 10;
    left: 50%;
    transform: translateY(0px) translateX(-50%);
  }

  &.next {
    z-index: 5;
    left: 75%;
    transform: translateY(50px) translateX(-50%);

    img {
      width: 300px;
    }
  }
`;

const StyledButtons = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
`;

const StyledButton = styled.button`
  margin: 0 5px;
`;

export default GameCarouselContent;
