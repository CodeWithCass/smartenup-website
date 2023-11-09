import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';
import BannerContent from '../components/BannerContent.jsx';
import VrBanner from '../assets/Images/Banner/VR-Banner.svg';

const Banner = () => {
    return (
      <BannerStyled>
        <div className="banner-content">
          <Navbar />
          <BannerContent />
        </div>
      </BannerStyled>
    );
  };
  
  const BannerStyled = styled.div`
  
    min-height: 100vh;
    width: 100%;
    background-image: url(${VrBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .banner-content {
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
  
  export default Banner;