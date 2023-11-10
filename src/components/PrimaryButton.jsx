import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  font-family: 'Ondo', sans-serif;
  margin: 10px;
  font-size: 20px;
  background-image: linear-gradient(
    to right,
    #6542f4 0%,
    #f976ff 51%,
    #b50098 100%
  );
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  display: block;
  letter-spacing: 0.8px;
  font-weight: 800;
  cursor: pointer;
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);

  .&:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export default PrimaryButton;
