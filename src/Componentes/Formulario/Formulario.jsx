import React from 'react';
import { Boton } from './Formulario.styles';

import useMoneda from '../../Hooks/useMoneda';

const Formulario = () => {
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'GDP', nombre: 'Libra Esterlina' },
  ];

  //Utilizamos nuestro custom Hook useMoneda
  const [moneda, SeleccionDeMonedas, setMoneda] = useMoneda(
    'Elige tu moneda',
    '',
    MONEDAS
  );

  return (
    <form>
      <SeleccionDeMonedas />
      <Boton type='submit' value='Calcular' />
    </form>
  );
};

export default Formulario;
