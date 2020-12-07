import React, { Fragment, useState } from 'react';
import { Label, Select } from '../Moneda/useMoneda.styles';

const useCriptomoneda = (label, stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const SeleccionarCriptomoneda = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}></Select>
      <option value=''>- Seleccione -</option>
      {/* {opciones.map((opcion) => (
        <option key={opcion.codigo} value={opcion.codigo}>
          {opcion.nombre}
        </option>
      ))} */}
    </Fragment>
  );

  return [state, SeleccionarCriptomoneda, setState];
};

export default useCriptomoneda;
