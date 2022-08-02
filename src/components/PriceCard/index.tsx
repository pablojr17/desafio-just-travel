import React from 'react';
import { Container } from './styles';

export const PriceCard = () => {
  return (
    <Container>
      <h3>Preço</h3>

      <form action="">
        <input type="radio" name="price" value="05" id="01" />
        <label htmlFor="01">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="10" id="02" />
        <label htmlFor="02">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="20" id="03" />
        <label htmlFor="03">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="30" id="04" />
        <label htmlFor="04">R$ 10,00 - R$ 390,00</label>
      </form>
    </Container>
  );
};
