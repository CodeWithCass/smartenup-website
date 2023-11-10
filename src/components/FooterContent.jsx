import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Images/logo.svg';

const FooterContent = () => {
  return (
    <FooterContentStyled>
      <div className='footer-container'>
        <div className='logo-container'>
          <div className='logo-text'>
            <img src={logo} alt='' />
            <p>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals.
            </p>
          </div>
        </div>
        <ul className='footer-pages'>
          <div className='footer-link1'>
            <li>Company</li>
            <li>
              <button type="button">Products</button>
            </li>
            <li>
              <button type="button">Apps & Games</button>
            </li>
            <li>
              <button type="button">Features</button>
            </li>
          </div>
          <div className='footer-link2'>
            <li>Help</li>
            <li>
              <button type="button">Support</button>
            </li>
            <li>
              <button type="button">About</button>
            </li>
            <li>
              <button type="button">Contact Us</button>
            </li>
          </div>
          <div className='footer-link3'>
            <li>Resources</li>
            <li>
              <button type="button">Youtube Playlist</button>
            </li>
            <li>
              <button type="button">How to - Blog</button>
            </li>
            <li>
              <button type="button">Terms & Conditions</button>
            </li>
          </div>
        </ul>
        <div className='footer-copyright'>
          <p>
            Copyright 2021. All Rights Reserved by board
          </p>
        </div>
      </div>
    </FooterContentStyled>
  );
};

const FooterContentStyled = styled.div`
  padding: 0 18rem;

  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }

  .footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .logo-con {
      display: flex;
      align-items: center;
      img {
        width: 90px;
      }
    }
  .footer-pages {
    display: flex;
    justify-content: space-between;

    li {
      padding: 2rem 0;
      list-style: none;
      a {
        text-decoration: none;
        color: #fff; 
        cursor: pointer;

        &:hover {
          color: lightblue; 
        }
      }
    }
  }
`;

export default FooterContent;
