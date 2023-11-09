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
			{/* TODO: Sidebar for mobile screens*/}
			<ul>
				<li>
					<Link to='header' spy={true} smooth={true}>
						PRODUCTS
					</Link>
				</li>
				<li>
					<Link to='feathures' spy={true} smooth={true}>
						APPS & GAMES
					</Link>
				</li>
				<li>
					<Link to='pricing' spy={true} smooth={true}>
						FEATURES
					</Link>
				</li>
				<li>
					<Link to='pricing' spy={true} smooth={true}>
						SUPPORT
					</Link>
				</li>
				<li>
					<Link to='pricing' spy={true} smooth={true}>
						ABOUT
					</Link>
				</li>
			</ul>
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

	ul {
		display: flex;
		justify-content: space-between;
		width: 70%;
		li {
			cursor: pointer;
		}
	}
`;
export default Navbar;
