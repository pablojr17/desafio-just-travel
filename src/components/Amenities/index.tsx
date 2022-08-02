import { Checkbox } from 'antd';
import { Container, Content } from './styles';

export const Amenities = () => {
  return (
    <Container>
      <h2>Comodidades</h2>

      <Content>
        <Checkbox onChange={() => console.log('wifi')}>Wi-Fi</Checkbox>
        <Checkbox onChange={() => console.log('cozinha')}>Cozinha</Checkbox>
        <Checkbox onChange={() => console.log('maquina de lavar')}>
          Máquina de Lavar
        </Checkbox>
        <Checkbox onChange={() => console.log('ar')}>Ar-condicionado</Checkbox>
        <Checkbox onChange={() => console.log('secadora')}>Secadora</Checkbox>
      </Content>
    </Container>
  );
};
