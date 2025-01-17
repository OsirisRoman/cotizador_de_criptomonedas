import styled from '@emotion/styled';

export const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

export const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

export const Header = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 300;
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export const Descripcion = styled.h4`
  color: white;
  text-align: center;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
`;
