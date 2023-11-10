import React from 'react';
import styled from 'styled-components';

const SecondaryButton = ({ name }) => {
  return (
    <SecondaryButtonStyled>
      <span>{name}</span>

      <i className='fas fa-arrow-right'></i>
    </SecondaryButtonStyled>
  );
};

const SecondaryButtonStyled = styled.button`
  font-family: 'Ondo', sans-serif;
  margin: 10px;
  font-size: 20px;
  background: var(
    --Text-Gradient,
    linear-gradient(90deg, #6542f4 11.84%, #f976ff 51.56%, #b50098 86.46%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 800;
  line-height: 110.6%; /* 22.12px */
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: block;
  text-align: center;
  padding: 15px 45px;
  transition: 256ms all;
  position: relative;
  cursor: pointer;
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  stroke-width: 1px;
  stroke: var(--Button-Gradient, #6542F4);



  .&:before {
    background: rgb(24, 24, 24);
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }

  .&:after {
    content: '';
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(90deg, #6542f4 0%, #f976ff 51%, #b50098 100%);
    transition: 256ms all;
    z-index: -1;
  }
`;

export default SecondaryButton;
