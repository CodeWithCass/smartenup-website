import React from 'react';
import styled from 'styled-components';
import VrWomen from '../assets/Images/CallToAction/vr-women.svg';
import Rectangle from '../assets/Images/CallToAction/Rectangle.svg';
import SecondaryButton from './SecondaryButton';

const CallToActionContent = () => {
  return (
    <CallToActionContentStyled>
      <div className='action-card'>
        <div className='left-card'>
          <div className='VrWomen'>
            <img src={VrWomen} alt='' />
          </div>
        </div>
        <div className='right-card'>
          <div className='call-to-action-text'>
            <h1>
              Discover the <span className='gradient-text'>Virtual</span>{' '}
              Reality Gaming
            </h1>
            <p>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </p>
            <SecondaryButton name='Play Now' />
          </div>
        </div>
      </div>
    </CallToActionContentStyled>
  );
};

const CallToActionContentStyled = styled.div`
  display: flex;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .action-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10rem;
    border-radius: 10px;
    border: 1px solid #000;
    background-image: url(${Rectangle});
  }

  .left-card {
    margin-left: auto;
    margin-right: auto;

    .img {
      height: 400px;
    }
  }

  .right-card {
    display: relative;
    position: relative;
    align-items: center;
    padding-right: 3rem;
    padding-top: 3rem;
  }

  .gradient-text {
    background: linear-gradient(
      90deg,
      #6542f4 43.84%,
      #f976ff 68.39%,
      #b50098 91.97%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default CallToActionContent;
