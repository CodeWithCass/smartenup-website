import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import CP1 from '../assets/Images/Filters/CP-1.svg';
import CP2 from '../assets/Images/Filters/CP-2.svg';
import CP3 from '../assets/Images/Filters/CP-3.svg';
import CP4 from '../assets/Images/Filters/CP-4.svg';
import CP5 from '../assets/Images/Filters/CP-5.svg';
import CP6 from '../assets/Images/Filters/CP-6.svg';
import ProfileCameron from '../assets/Images/Filters/Profile-Cameron.svg';
import ProfileDianne from '../assets/Images/Filters/Profile-Dianne.svg';
import ProfileJane from '../assets/Images/Filters/Profile-Jane.svg';
import ProfileCody from '../assets/Images/Filters/Profile-Cody.svg';
import ProfileRobert from '../assets/Images/Filters/Profile-Robert.svg';

const FilterContent = () => {
  return (
    <FilterContentStyled>
      <div className='filter-container'>
        <div className='filter-text'>
          <h1 className='filter-title'>Welcome to the top <span className='gradient-text'>games</span></h1>
        </div>
        <div className='filter-buttons'>
          <PrimaryButton name='Newest Games' />
          <SecondaryButton name='Latest Games' />
          <SecondaryButton name='Fight Games' />
          <SecondaryButton name='Sport Games' />
        </div>
        <ul className='card-container'>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP1} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileCameron} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Cameron Williamson</h5>
                    <text>Gillette</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP2} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileDianne} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Dianne Russell</h5>
                    <text>Louis Vuiton</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP3} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileJane} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Jane Cooper</h5>
                    <text>MasterCard</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP4} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileCody} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Cody Fisher</h5>
                    <text>The Walt Disney Company</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP5} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileCody} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Wade Warren</h5>
                    <text>Gilette</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
          <li className='card-content'>
            <div className='filter-card'>
              <div className='filter-card-content'>
                <div className='filter-card-img'>
                  <img src={CP6} alt='' />
                </div>
                <div className='filter-card-title'>Core Phillosophies</div>
                <div className='filter-card-profile'>
                  <div className='profile-card-img'>
                    <img src={ProfileRobert} alt='' />
                  </div>
                  <div className='profile-card-name'>
                    <h5>Robert Fox</h5>
                    <text>L'Oréal</text>
                  </div>
                </div>
                <div className='filter-card-button'>
                <PrimaryButton name='Live Demo' />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </FilterContentStyled>
  );
};

const FilterContentStyled = styled.div`
  .filter-container {
    padding: 0 10rem;
    padding-top: 3rem;
    text-align: center;
    padding-bottom: 10rem;
    height: auto;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .filter-buttons {
    display: inline-flex;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .gradient-text {
    background: linear-gradient(90deg, #6542F4 43.84%, #F976FF 68.39%, #B50098 91.97%);background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 1rem;
  }

  .card-content {
    display: flex;
    padding: 1rem;
    @media (min-width: 40rem) {
      width: 50%;
    }
    @media (min-width: 56rem) {
      width: 33.3333%;
    }
  }

  .filter-card {
    backdrop-filter: blur(25px);
    border-radius: 0.25rem;
    box-shadow: 0px 4px 20px -1px rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover {
      .card__image {
        filter: contrast(100%);
      }
    }
  }

  .filter-card-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }
`;

export default FilterContent;
