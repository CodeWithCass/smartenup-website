import React from 'react';
import styled from 'styled-components';
import GameCarouselContent from '../components/GameCarouselContent.jsx';

const GameCarousel = () => {
    return (
      <GameCarouselStyled>
        <div className="game-carousel-content">
          <GameCarouselContent />
        </div>
      </GameCarouselStyled>
    );
  };
  
  const GameCarouselStyled = styled.div`
  
    min-height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .game-carousel-content {
      padding: 0 10rem;
  
      @media screen and (max-width: 1347px) {
        padding: 5rem 14rem;
      }
      @media screen and (max-width: 1186px) {
        padding: 5rem 8rem;
      }
      @media screen and (max-width: 990px) {
        padding: 5rem 4rem;
      }
    }
  `;
  
  export default GameCarousel;