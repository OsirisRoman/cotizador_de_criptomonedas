import { useState, useEffect } from 'react';

import axios from 'axios';

import { Contenedor, Imagen, Header } from './App.styles';

import imagen from './cryptomonedas.png';

import Formulario from './Componentes/Formulario/Formulario';
import Cotizacion from './Componentes/Cotizacion/Cotizacion';

function App() {
  //Estado de la moneda
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('');
  //Estado de la criptomoneda
  const [criptomonedaSeleccionada, setCriptomonedaSeleccionada] = useState('');

  //Estado de la cotización
  const [resultado, setResultado] = useState({});

  //
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
        />
        <Cotizacion resultado={resultado} />
      </div>
    </Contenedor>
  );
}

export default App;
