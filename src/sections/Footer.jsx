import React from 'react';
import styled from 'styled-components';
import FooterContent from '../components/FooterContent.jsx';
import VrLady from '../assets/Images/Footer/VR-lady.svg';

const Footer = () => {
    return (
      <FooterStyled>
        <div className="footer-content">
          <FooterContent />
        </div>
      </FooterStyled>
    );
  };
  
  const FooterStyled = styled.div`
  
    min-height: 100vh;
    width: 100%;
    background-image: url(${VrLady});
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
  
  export default Footer;