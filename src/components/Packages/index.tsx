import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Logo from '../../../public/images/gloss.svg';
import { theme } from '../../styles/theme';
import { Container, Content, SectionPackage, Button } from './styles';

export const Packeges = () => {
  return (
    <Container>
      <Content>
        <SectionPackage>
          <div>
            <Image src={Logo} alt="Logo" width={172} height={235} />
            <p>
              Pacotes a partir de R$499? Até parece viagem! <br /> Descubra o
              seu próximo destino por um precinho que só o lorem tem.
            </p>
          </div>
          <Button>
            Conhecer mais pacotes
            <ArrowRightOutlined
              style={{ fontSize: '24x', color: theme.colors.BLUE }}
            />
          </Button>
        </SectionPackage>
      </Content>
    </Container>
  );
};
