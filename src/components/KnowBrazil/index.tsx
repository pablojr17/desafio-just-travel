import React from 'react';
import { CardItem, Container, Content, ContentCard } from './style';
import Image from 'next/image';
import { MockKnowBrazil } from '../../Mocks/MockKnowBrazil';

export default function KnowBrazil() {
  return (
    <Container>
      <Content>
        <h1>Conheça o Brasil</h1>
        <span>Estes destinos incríveis têm muito a oferecer</span>

        <ContentCard>
          {MockKnowBrazil.map((item) => (
            <CardItem key={item.id}>
              <div className="image">
                <Image src={item.img} alt="Logo" width={248} height={242} />
              </div>
              <div className="content-title">
                <p>{item.title}</p>
              </div>
            </CardItem>
          ))}
        </ContentCard>
      </Content>
    </Container>
  );
}
