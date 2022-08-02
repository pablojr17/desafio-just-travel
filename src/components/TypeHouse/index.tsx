import Image from 'next/image';
import House from '../../../public/images/house.svg';
import Apartamento from '../../../public/images/apartment.svg';
import Hotel from '../../../public/images/hotel.svg';
import { Container } from './styles';

export const TypeHouse = () => {
  return (
    <Container>
      <h3>TypeHouse</h3>

      <form action="">
        <input type="radio" name="itemTypeHouse" id="house" />
        <label htmlFor="house">
          <Image src={House} alt="House" width={18} height={18} />
          <span>casa (346)</span>
        </label>

        <input type="radio" name="itemTypeHouse" id="apartment" />
        <label htmlFor="apartment">
          <Image src={Apartamento} alt="Apartment" width={18} height={18} />
          <span>Apartamento (234)</span>
        </label>

        <input type="radio" name="itemTypeHouse" id="hotel" />
        <label htmlFor="hotel">
          <Image src={Hotel} alt="Hotel" width={18} height={18} />
          <span>Hotel (23)</span>
        </label>
      </form>
    </Container>
  );
};
