import React from 'react';

import { MensajeError } from './Error.styles';

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
