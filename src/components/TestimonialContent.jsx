import React from 'react';
import styled from 'styled-components';
import Rectangle from '../assets/Images/Testimonial/Rectangle1.svg';
import WhiteStar from '../assets/Images/Testimonial/white-star.svg';
import ReviewArlene from '../assets/Images/Testimonial/Review-Arlene.svg';
import ReviewKathryn from '../assets/Images/Testimonial/Review-Kathryn.svg';

const TestimonialContent = () => {
  return (
    <TestimonialContentStyled>
      <div className='testimonial-container'>
        <div className='testimonial-card'>
          <div className='card-top'>
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
          </div>
          <div className='card-text'>
            <span>
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </span>
          </div>
          <div className='card-bottom'>
            <img src={ReviewArlene} alt='' />
            <h4>Arlene McCoy</h4>
          </div>
        </div>
        <div className='testimonial-card'>
          <div className='card-top'>
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
            <img src={WhiteStar} alt='' />
          </div>
          <div className='card-text'>
            <span>
            Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.
            </span>
          </div>
          <div className='card-bottom'>
            <img src={ReviewKathryn} alt='' />
            <h4>Kathryn Murphy</h4>
          </div>
        </div>
      </div>
    </TestimonialContentStyled>
  );
};

const TestimonialContentStyled = styled.div`
  padding-top: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .testimonial-card {
    display: inline-flex;
    width: 50%;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #000;
    background: url(${Rectangle});
    box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0);
    backdrop-filter: blur(25px);
  }

  .span {
    color: #fff;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 185.1%; /* 29.616px */
    letter-spacing: 0.64px;
  }
  .h4 {
    color: #fff;
    font-family: Lato;
    font-size: 20.968px;
    font-style: normal;
    font-weight: 500;
    line-height: 110.6%; /* 23.191px */
    letter-spacing: 0.734px;
    text-transform: capitalize;
  }
`;

export default TestimonialContent;
