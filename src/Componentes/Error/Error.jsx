import React from 'react';
import PropTypes from 'prop-types';

import { MensajeError } from './Error.styles';

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
