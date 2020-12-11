import { useState, useEffect } from 'react';

import axios from 'axios';

import { Contenedor, Imagen, Header } from './App.styles';

import imagen from './cryptomonedas.png';

import Formulario from './Componentes/Formulario/Formulario';
import Cotizacion from './Componentes/Cotizacion/Cotizacion';
import Spinner from './Componentes/Spinner/Spinner';

function App() {
  //Estado de la moneda
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('');
  //Estado de la criptomoneda
  const [criptomonedaSeleccionada, setCriptomonedaSeleccionada] = useState('');

  //Estado de la cotización
  const [resultado, setResultado] = useState({});

  //Estado para mostrar el spinner
  const [cargando, setCargando] = useState(false);

  //Hook que realiza la consulta cuando cambian los valores de la moneda y criptomoneda seleccionada
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
        return;
      }

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedaSeleccionada}&tsyms=${monedaSeleccionada}`;
      const resultado = await axios.get(url);

      setResultado(
        resultado.data.DISPLAY[criptomonedaSeleccionada][monedaSeleccionada]
      );
    };

    cotizarCriptomoneda();
  }, [monedaSeleccionada, criptomonedaSeleccionada]);

  //Hook para mover la pantalla y que se pueda ver el resultado de la cotización
  useEffect(() => {
    let espera = 0;
    if (!cargando) {
      espera = 275;
    }
    setTimeout(() => {
      window.scrollBy(0, window.outerHeight);
    }, espera);
  }, [cargando]);

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='imagen cripto' />
      </div>
      <div>
        <Header>Cotiza criptomonedas al instante</Header>
        <Formulario
          setMonedaSeleccionada={setMonedaSeleccionada}
          setCriptomonedaSeleccionada={setCriptomonedaSeleccionada}
          setCargando={setCargando}
        />
        {!cargando ? <Cotizacion resultado={resultado} /> : <Spinner />}
      </div>
    </Contenedor>
  );
}

export default App;
