import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ name }) => {
	return <ButtonStyled>{name}</ButtonStyled>;
};

const ButtonStyled = styled.button`
	background-image: linear-gradient(
		to right,
		#6542f4 0%,
		#f976ff 51%,
		#b50098 100%
	);
	margin: 10px;
	padding: 15px 45px;
	text-align: center;
	text-transform: uppercase;
	transition: 0.5s;
	background-size: 200% auto;
	color: white;
	border-radius: 10px;
	display: block;
	font-family: 'Ondo', sans-serif;
	font-weight: 800;
	font-size: 20px;

	.&:hover {
		background-position: right center; /* change the direction of the change here */
		color: #fff;
		text-decoration: none;
	}
`;

export default PrimaryButton;
