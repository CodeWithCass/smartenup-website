import React from 'react';
import styled from 'styled-components';
import CallToActionContent from '../components/CallToActionContent.jsx'

const CallToAction = () => {
    return (
      <CallToActionStyled>
        <div>
          <CallToActionContent />
        </div>
      </CallToActionStyled>
    );
  };
  
  const CallToActionStyled = styled.div`
    min-height: 100vh;
    width: 100%;
  `;
  
  export default CallToAction;