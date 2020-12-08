import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Boton } from './Formulario.styles';

import useMoneda from '../../Hooks/Moneda/useMoneda';
import useCriptomoneda from '../../Hooks/Criptomoneda/useCriptomoneda';

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
  const [
    criptomoneda,
    SeleccionDeCriptomoneda,
    setCriptomoneda,
  ] = useCriptomoneda('Elige tu Criptomoneda', '', []);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      console.log(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SeleccionDeMonedas />
      <SeleccionDeCriptomoneda />
      <Boton type='submit' value='Calcular' />
    </form>
  );
};

export default Formulario;
