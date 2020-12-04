import { Contenedor, Imagen, Header } from './App.styles';
import imagen from './cryptomonedas.png';

function App() {
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='imagen cripto' />
      </div>
      <div>
        <Header>Cotiza criptomonedas al instante</Header>
      </div>
    </Contenedor>
  );
}

export default App;
