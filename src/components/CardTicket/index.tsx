import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from 'antd';
import {
  Container,
  ContentImage,
  ContentInfo,
  SiderLeft,
  SiderRight,
} from './styles';
import { GoLocation } from 'react-icons/go';
import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import { ITicketProps } from '../../interfaces';

interface cardProps {
  item: ITicketProps;
}

export const CardTicket = ({ item }: cardProps) => {
  const router = useRouter();

  return (
    <Container>
      <SiderLeft>
        <ContentImage>
          <button>Ingresso</button>
          <div>
            <HeartOutlined
              style={{
                fontSize: '18px',
                color: '#fff',
              }}
            />
          </div>
          <Image
            src={item.images}
            loading="eager"
            width={213}
            height={233}
            objectFit="cover"
            layout="fixed"
          />
        </ContentImage>

        <ContentInfo>
          <h2>{item.name}</h2>
          <span>
            <GoLocation />
            {item.location}
          </span>

          <div className="points">
            <div className="score">
              <span>6.3</span>
            </div>
            <p>{item.departament}</p>
            <span>(423 Reviews)</span>
          </div>
        </ContentInfo>
      </SiderLeft>

      <SiderRight>
        <span>de R$ 2.351,28 por</span>

        <p>
          <span>R$</span>
          {item.price}
        </p>

        <Button
          type="primary"
          onClick={() => router.push(`/details/${item.id}`)}
          style={{
            height: '39px',
            width: '154px',
            backgroundColor: '#4070F4',
          }}
        >
          Saber Mais
          <ArrowRightOutlined
            style={{
              color: '#fff',
            }}
          />
        </Button>
      </SiderRight>
    </Container>
  );
};
