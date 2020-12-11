import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Error from '../Error/Error';

import { Boton } from './Formulario.styles';

import useMoneda from '../../Hooks/Moneda/useMoneda';
import useCriptomoneda from '../../Hooks/Criptomoneda/useCriptomoneda';

const Formulario = ({
  setMonedaSeleccionada,
  setCriptomonedaSeleccionada,
  setCargando,
}) => {
  const [listaCriptomonedas, setlistaCriptomonedas] = useState([]);
  const [error, setError] = useState(false);

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
  ] = useCriptomoneda('Elige tu Criptomoneda', '', listaCriptomonedas);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      setlistaCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();

    //validación de campos
    if (moneda === '' || criptomoneda === '') {
      setError(true);
      return;
    }

    //Quitar mensaje de error
    setError(false);
    //Mostrar Spinner
    setCargando(true);

    setTimeout(() => {
      //Quitar Spinner
      setCargando(false);
      setMonedaSeleccionada(moneda);
      setCriptomonedaSeleccionada(criptomoneda);
    }, 2000);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
      <SeleccionDeMonedas />
      <SeleccionDeCriptomoneda />
      <Boton type='submit' value='Calcular' />
    </form>
  );
};

export default Formulario;
