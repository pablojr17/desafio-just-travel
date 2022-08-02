import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaPlane } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { ITicketProps } from '../../interfaces';
import { api } from '../../services/api';
import {
  TicketCard,
  Container,
  Content,
  SectionPrimary,
  ContentBanner,
  InfoBanner,
  InfoBannerSecundary,
  InfoBannerTertiary,
  ContentIcons,
  ContentSobre,
  ContentLoad,
  ContentDate,
  ContentCategory,
  ContentPrice,
} from './styles';
import { ArrowDownOutlined } from '@ant-design/icons';
import Calendar from '../../../public/images/calendar.svg';
import ArrowLeftCurve from '../../../public/images/arrow-left-curve.svg';
import Shape from '../../../public/images/shape.svg';
import { GoLocation } from 'react-icons/go';
import dynamic from 'next/dynamic';
export const DetailsTicket = () => {
  const [ticketDetails, setTicketDetails] = useState<ITicketProps>();

  const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
    ssr: false,
    loading: () => <p>Map is loading</p>,
  });

  const router = useRouter();
  const { id } = router.query;

  const getTicket = useCallback(async () => {
    const { data } = await api.get<ITicketProps>(`/${id}`);
    setTicketDetails(data);
  }, [id]);

  useEffect(() => {
    getTicket();
  }, [getTicket]);
  return (
    <>
      {ticketDetails ? (
        <Container>
          <Content>
            <SectionPrimary>
              <h3>
                <Link href="/">
                  <Image
                    src={ArrowLeftCurve}
                    alt="backs"
                    width={24}
                    height={24}
                    objectFit="contain"
                    quality={100}
                  />
                </Link>

                {ticketDetails.name}
              </h3>
              <p>
                <GoLocation />
                {ticketDetails.location}
              </p>
            </SectionPrimary>

            <ContentBanner>
              <button className="btn_view">Visualizar mais fotos</button>
              <Image
                src={ticketDetails.images}
                width={1320}
                height={434}
                objectFit="cover"
              />
            </ContentBanner>

            <InfoBanner>
              <InfoBannerSecundary>
                <div className="note">
                  <div className="card_score">
                    <span>6.3</span>
                  </div>
                  <p>{ticketDetails.departament}</p>
                  <span>(423 Reviews)</span>
                </div>

                <InfoBannerTertiary>
                  <ContentIcons>
                    <p>
                      <FaPlane size={18} />
                      Passagem Aérea
                    </p>

                    <p>
                      <AiOutlineWifi size={18} />
                      Wi-fi
                    </p>

                    <p>
                      <FiCoffee size={18} />
                      Café de manhã
                    </p>
                    <p>
                      <BiHomeAlt size={18} />
                      Quarto
                    </p>
                  </ContentIcons>

                  <ContentSobre>
                    <h1>Sobre o Ingresso selecionado:</h1>
                    <p>{ticketDetails.description}</p>
                  </ContentSobre>
                  <MapWithNoSSR />
                </InfoBannerTertiary>
              </InfoBannerSecundary>

              <TicketCard>
                <ContentDate>
                  <div>
                    <Image
                      src={Calendar}
                      alt="Calendario"
                      width={24}
                      height={24}
                    />
                    <div className="info">
                      <p>Data do Ingresso</p>
                      <span>22/12/2022</span>
                    </div>
                  </div>
                  <ArrowDownOutlined />
                </ContentDate>
                <ContentDate>
                  <div>
                    <Image src={Shape} width={16} height={18} alt="image" />
                    <div className="info">
                      <p>Ingressos</p>
                      <span>03 Ingressos</span>
                    </div>
                  </div>
                  <ArrowDownOutlined />
                </ContentDate>
                <ContentCategory>
                  <div className="item">
                    <span>01 Ingresso infantil</span>
                    <span>R$245,99</span>
                  </div>
                  <div className="item">
                    <span>02 Ingresso Adultos</span>
                    <span>R$245,99</span>
                  </div>
                  <div className="item">
                    <span>Seguro viajem</span>
                    <span>R$245,99</span>
                  </div>
                </ContentCategory>
                <ContentPrice>
                  <div>
                    <p>Valor total</p>
                    <h3>{ticketDetails.price}</h3>
                  </div>
                  <button>Comprar Ingresso</button>
                </ContentPrice>
              </TicketCard>
            </InfoBanner>
          </Content>
        </Container>
      ) : (
        <ContentLoad>
          <div>Carregando...</div>
        </ContentLoad>
      )}
    </>
  );
};
