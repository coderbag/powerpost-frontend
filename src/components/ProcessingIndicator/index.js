import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const Indicator = ({ isProcessing }) => {
  if (isProcessing) {
    return (
      <Wrapper>
        Processing, please wait...
      </Wrapper>
    );
  }
  return <div></div>;
};

Indicator.propTypes = {
  isProcessing: PropTypes.bool,
};

export default Indicator;
