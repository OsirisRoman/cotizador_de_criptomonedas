import React from 'react';
import { Boton } from './Formulario.styles';

import useMoneda from '../../Hooks/useMoneda';

const Formulario = () => {
  //Utilizamos nuestro custom Hook useMoneda
  const [moneda, SeleccionDeMonedas, setMoneda] = useMoneda();

  return (
    <form>
      <SeleccionDeMonedas />
      <Boton type='submit' value='Calcular' />
    </form>
  );
};

export default Formulario;
