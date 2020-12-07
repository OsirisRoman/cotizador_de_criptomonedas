import React, { Fragment, useState } from 'react';

import { Label, Select } from './useMoneda.styles';

const useMoneda = (label, stateInicial, opciones) => {
  //Estado de nuestro Hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''>- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz y función que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
