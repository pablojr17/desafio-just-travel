import React from 'react';
import Link from 'next/link';
import {
  Container,
  Content,
  ContentInfoSecundary,
  ContentLeft,
  ContentRight,
  ContentSocialNetwork,
  FooterPrimary,
  FooterSecundary,
} from './style';
import Image from 'next/image';
import Logo from '../../../public/images/white-logo.svg';
import { InstagramOutlined, LinkedinFilled } from '@ant-design/icons';

export default function Footer() {
  return (
    <Container>
      <Content>
        <FooterPrimary>
          <ContentLeft>
            <Image src={Logo} alt="Logo" width={135} height={29} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id
              consequat dignissim metus. Mi et aenean quam lacus, enim nunc.
              Enim pellentesque interdum dui, integer bibendum at id. Sed nisi,
              enim, eleifend duis arcu, orci nisl massa.
            </p>

            <ContentSocialNetwork>
              <LinkedinFilled style={{ fontSize: '19px', color: '#fff' }} />
              <InstagramOutlined style={{ fontSize: '19px', color: '#fff' }} />
            </ContentSocialNetwork>
          </ContentLeft>

          <ContentRight>
            <div>
              <span>Conheça</span>
              <ul>
                <li>
                  <Link href="#">Quem somos</Link>
                </li>
                <li>
                  <Link href="#">Trabalhe conosco</Link>
                </li>
                <li>
                  <Link href="#">Seja um parceiro</Link>
                </li>
              </ul>
            </div>

            <div>
              <span>Viaje</span>
              <ul>
                <li>
                  <Link href="#">Pacotes</Link>
                </li>
                <li>
                  <Link href="#">Passagens</Link>
                </li>
                <li>
                  <Link href="#">Hotéis</Link>
                </li>
              </ul>
            </div>

            <div>
              <span>Fale consoco</span>
              <ul>
                <li>
                  <Link href="#">Central de Ajuda</Link>
                </li>
                <li>
                  <Link href="#">Política de privacidade</Link>
                </li>
                <li>
                  <Link href="#">Política de cookies</Link>
                </li>
                <li>
                  <Link href="#">Termos de uso</Link>
                </li>
              </ul>
            </div>
          </ContentRight>
        </FooterPrimary>

        <FooterSecundary>
          <ContentInfoSecundary>
            <span>
              Copyright 2021 | Just Travel Travel Tech. All Rights Reserved.
            </span>
            <div>
              <span>Engineering made in BrazilBrazil</span>
            </div>
          </ContentInfoSecundary>
        </FooterSecundary>
      </Content>
    </Container>
  );
}
