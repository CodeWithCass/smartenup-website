import React from 'react';
import styled from 'styled-components';
import VrWomen from '../assets/Images/CallToAction/vr-women.svg';
import Rectangle from '../assets/Images/CallToAction/Rectangle.svg';
import SecondaryButton from './SecondaryButton';

const CallToActionContent = () => {
  return (
    <CallToActionContentStyled>
      <div className='container'>
        <div className='inner-card'>
          <div className='left-card'>
            <div className='VrWomen'>
              <img src={VrWomen} alt='' />
            </div>
          </div>
          <div className='right-card'>
            <div className='call-to-action-text'>
              <h1>Discover the <span className='gradient-text'>Virtual</span> Reality Gaming</h1>
              <p>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </p>
              <SecondaryButton name='Play Now' />
            </div>
          </div>
        </div>
      </div>
    </CallToActionContentStyled>
  );
};

const CallToActionContentStyled = styled.div`
  display: flex;
  width: 1440px;
  height: 768px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .inner-card {
    margin: 300px;
    border-radius: 10px;
    border: 1px solid #000;

    background: url(${Rectangle}), lightgray 0% 0% / 100px 100px repeat,
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08) 0%,
        rgba(217, 217, 217, 0.04) 100%
      );

    box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0);
    backdrop-filter: blur(25px);
  }

  .gradient-text {
    background: linear-gradient(90deg, #6542F4 43.84%, #F976FF 68.39%, #B50098 91.97%);background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default CallToActionContent;
