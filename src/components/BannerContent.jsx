import React from 'react'
import styled from 'styled-components'

const BannerContent = () => {
    return (
        <BannerContentStyled>
            <div className="banner-container">
                <div className="banner-text">
                    <h1>Let your mind explore new world</h1>
                    <p>
                    Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
                    </p>
                </div>
            </div>
        </BannerContentStyled>
    );
};

const BannerContentStyled = styled.div` 
display: grid;
   grid-template-columns: repeat(2, 1fr);
   padding-top: 3rem;

   @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
   }
`

export default BannerContent;