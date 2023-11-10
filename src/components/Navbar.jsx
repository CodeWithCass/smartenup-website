import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../assets/Images/logo.svg';
import iconbag from '../assets/Images/Banner/icon-bag.svg';

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <div className='navPages'>
        {/* TODO: Sidebar for mobile screens*/}
        <ul>
          <li>
            <Link to='GameCarousel' spy={true} smooth={true}>
              Products
            </Link>
          </li>
          <li>
            <Link to='CallToAction' spy={true} smooth={true}>
              Apps & Games
            </Link>
          </li>
          <li>
            <Link to='Filters' spy={true} smooth={true}>
              Features
            </Link>
          </li>
          <li>
            <Link to='Testimonials' spy={true} smooth={true}>
              Support
            </Link>
          </li>
          <li>
            <Link to='Footer' spy={true} smooth={true}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className='iconbag'>
        <img src={iconbag} alt='' />
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;

  .navPages ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 18px;
    font-weight: 400;
    line-height: 110.6%; /* 19.908px */
    letter-spacing: 0.72px;
    text-transform: uppercase;

    li {
      margin-right: 20px;

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

  .iconbag img {
    width: 24px; 
  }
`;
export default Navbar;
