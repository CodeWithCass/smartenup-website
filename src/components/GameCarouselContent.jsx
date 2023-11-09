import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const GameCarouselContent = () => {
    return (
        <GameCarouselStyled>
            <div className="game-carousel-container">
                <div className="game-carousel-text">
                    <h1>Choose your favourite games</h1>
                    <p>
                    Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.
                    </p>
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

   @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
   }
`

export default GameCarouselContent;