
import React from 'react';
import PropTypes from 'prop-types';
import * as flags from './flags';

const Flag = ({ size = 64, code, type = 'shiny', style }) => {
  const flag = flags[`icons${size}`][code];
  const unknownFlag = flags[`icons${size}`]['unknown'];

  return <img
      src={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
};

Flag.propTypes = {
  code: PropTypes.string.isRequired,
  style: PropTypes.any
}

export default Flag;
