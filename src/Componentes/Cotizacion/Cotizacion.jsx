import React from 'react';

import { ResultadoDiv, Parrafo, Precio } from './Cotizacion.styles';

const Cotización = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Parrafo>
        El más alto del día: <span>{resultado.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        El precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación en las últimas 24 horas:{' '}
        <span>{resultado.CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Parrafo>
    </ResultadoDiv>
  );
};

export default Cotización;
