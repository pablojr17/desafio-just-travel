import React from 'react';
import Link from 'next/link';
import {
  Container,
  Content,
  ContentIcon,
  ContentLogin,
  ContentSignIn,
} from './style';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Shape from '../../../public/images/shape.svg';
import Path from '../../../public/images/path.svg';
import { Typography } from 'antd';

export default function Header() {
  return (
    <Container>
      <Content>
        <Image src={Logo} alt="Logo" width={135} height={29} />
        <ContentLogin>
          <ContentIcon>
            <Typography.Text>Cotação dólar hoje: R$5,53</Typography.Text>
            <Image src={Path} width={30} height={21} alt="image" />
          </ContentIcon>
          <ContentSignIn>
            <Image src={Shape} width={16} height={18} alt="image" />
            <Link href="#">Entrar</Link>
          </ContentSignIn>
        </ContentLogin>
      </Content>
    </Container>
  );
}
