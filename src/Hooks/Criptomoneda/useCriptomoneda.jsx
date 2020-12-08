import React, { Fragment, useState } from 'react';

import { Label, Select } from '../Moneda/useMoneda.styles';

const useCriptomoneda = (label, stateInicial, opciones) => {
  //Estado de nuestro Hook
  const [state, setState] = useState(stateInicial);

  const SeleccionarCriptomoneda = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''>- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SeleccionarCriptomoneda, setState];
};

export default useCriptomoneda;
