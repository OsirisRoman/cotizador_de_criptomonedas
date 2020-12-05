import { Contenedor, Imagen, Header } from './App.styles';

import imagen from './cryptomonedas.png';

import Formulario from './Componentes/Formulario/Formulario';

function App() {
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='imagen cripto' />
      </div>
      <div>
        <Header>Cotiza criptomonedas al instante</Header>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
