import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import three from '../assets/Images/Banner/300+.svg';
import two from '../assets/Images/Banner/200+.svg';
import five from '../assets/Images/Banner/500+.svg';

const BannerContent = () => {
  return (
    <BannerContentStyled>
      <div className='banner-container'>
        <div className='banner-text'>
          <h1>
            Let your mind <span className='gradient-text'>explore</span> new
            world
          </h1>
          <p>
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced term
            that suggests regular gameplay, possibly as a hobby.
          </p>
        </div>
        <div className='banner-buttons'>
          <PrimaryButton name='Buy Now' />
          <SecondaryButton name='Play Now' />
        </div>
        <div>
          <ul className='banner-stats'>
            <li className='banner-list'>
              <span className='banner-block'>
                <img src={three} alt='' />
                <text>Unique Style</text>
              </span>
            </li>
            <li className='banner-list'>
              <span>
                <img src={two} alt='' />
                <text>Projects Finished</text>
              </span>
            </li>
            <li className='banner-list'>
              <span>
                <img src={five} alt='' />
                <text>Happy Customers</text>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </BannerContentStyled>
  );
};

const BannerContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
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

  .banner-buttons {
    padding-top: 3rem;
    display: inline-flex;
  }
  .banner-stats {
    display: inline-flex;
    align-items: flex-start;
    gap: 2rem;
    list-style: none;
    padding-top: 3rem;
    text-transform: capitalize;
  }
  .banner-list {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 8rem;
  }
`;

export default BannerContent;
