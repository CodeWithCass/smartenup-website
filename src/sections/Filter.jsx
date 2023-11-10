import React from 'react';
import styled from 'styled-components';
import FilterContent from '../components/FilterContent.jsx';

const Filter = () => {
    return (
      <FilterStyled>
        <div className="filter-content">
          <FilterContent />
        </div>
      </FilterStyled>
    );
  };
  
  const FilterStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    mix-blend-mode: color-dodge;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .filter-content {
      padding: 0 10rem;
  
      @media screen and (max-width: 1347px) {
        padding: 5rem 14rem;
      }
      @media screen and (max-width: 1186px) {
        padding: 5rem 8rem;
      }
      @media screen and (max-width: 990px) {
        padding: 5rem 4rem;
      }
    }
  `;
  
  export default Filter;