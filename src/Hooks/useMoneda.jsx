import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {
  //Estado de nuestro Hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value=''>- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );

  //Retornar state, interfaz y función que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
