import React from 'react';
import styled from 'styled-components';
import Star from '../assets/Images/Star.svg';

const MovingBanner = () => {
  return (
    <MovingBannerStyled>
      <div className='container'>
        <div className='fixedWidth'>
          <div className='moving-text'>
            <span><img src={Star} alt=''/>Gaming spaning</span>
            <span><img src={Star} alt=''/>Action-Packed</span>
            <span><img src={Star} alt=''/>Mind-Bending</span>
            <span><img src={Star} alt=''/>Collection OG Games</span>
          </div>
        </div>
      </div>
    </MovingBannerStyled>
  );
};

const MovingBannerStyled = styled.div`
  color: #fff;
  font-family: Ondo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 110.6%; /* 33.18px */
  letter-spacing: 1.2px;
  text-transform: uppercase;

  .fixedWidth {
    width: 1453px;
    height: 90px;
    transform: rotate(-1.983deg);
    flex-shrink: 0;
  }

  .moving-text {
    color: #fff;
    font-family: Ondo;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 110.6%; /* 33.18px */
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;

export default MovingBanner;
