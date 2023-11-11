import React from 'react';
import styled from 'styled-components';
import Star from '../assets/Images/Star.svg';

const MovingBanner = () => {
  return (
    <MovingBannerStyled>
      <div className='container'>
        <div className='fixedWidth'>
          <div className='moving-text'>
            <span>
              <img src={Star} alt='' /> Gaming spaning <img src={Star} alt='' />{' '}
              Action-Packed <img src={Star} alt='' /> Mind-Bending{' '}
              <img src={Star} alt='' /> Collection OG Games{' '}
              <img src={Star} alt='' /> Gaming spaning <img src={Star} alt='' />{' '}
            </span>
          </div>
        </div>
      </div>
    </MovingBannerStyled>
  );
};

const MovingBannerStyled = styled.div`
  .container {
    color: #fff;
    font-family: Ondo;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 110.6%; /* 33.18px */
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .fixedWidth {
    width: 108rem;
    height: 50px;
    border: 1px solid #000;
    box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0);
    backdrop-filter: blur(25px);
    transform: rotate(-1.983deg);
  }

  .moving-text {
    margin-top: 5px;
    position: absolute;
    animation-name: wordslider;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes wordslider {
    0% {
      transform: translateX(150px);
    }
    100% {
      transform: translateX(-600px);
    }
  }
`;

export default MovingBanner;
