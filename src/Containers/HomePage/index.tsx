import { useEffect, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import {
  Container,
  Content,
  ContentMenu,
  HeaderContentInput,
  SiderRight,
  Sider,
  Pagination,
  SelectPage,
} from './styles';
import SelectOneMenu from '../../../public/images/select1.svg';
import SelectTwoenu from '../../../public/images/select.svg';
import Image from 'next/image';
import { PriceCard } from '../../components/PriceCard';
import { PropertyType } from '../../components/PropertyType';
import { Amenities } from '../../components/Amenities';
import { TypeHouse } from '../../components/TypeHouse';
import { ReviewScore } from '../../components/ReviewScore';
import { api } from '../../services/api';
import { CardTicket } from '../../components/CardTicket';
import { ITicketProps } from '../../interfaces';

export default function HomePage() {
  const [search, setSearch] = useState();
  const [dados, setDados] = useState<ITicketProps[]>();
  const [listItems, setListItems] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const getTickets = async () => {
    const { data } = await api.get<ITicketProps[]>('');
    setDados(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    const endOffset = 0 + itemsPerPage;
    setListItems(dados?.slice(0, endOffset));
  }, [itemsPerPage, dados]);

  return (
    <Container>
      <HeaderContentInput>
        <div className="content">
          <InputSearch search={search} setSearch={setSearch} />
          <ContentMenu>
            <Image src={SelectOneMenu} width={44} height={44} alt="image" />
            <Image src={SelectTwoenu} width={44} height={44} alt="image" />
          </ContentMenu>
        </div>
      </HeaderContentInput>

      <Content>
        <section>
          <Sider>
            <div className="section-top">
              <h4>Filter</h4>
              <span>Limpar todos os filtros</span>
            </div>

            <PriceCard />
            <PropertyType />
            <Amenities />
            <TypeHouse />
            <ReviewScore />
          </Sider>

          <SiderRight>
            {listItems &&
              listItems.map((item: ITicketProps) => (
                <CardTicket item={item} key={item.id} />
              ))}

            <Pagination>
              <section className="info">
                {dados && <span>{dados.length} Resultados</span>}

                <SelectPage>
                  <p>Página: </p>
                  <select
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    value={itemsPerPage}
                    id="item"
                    name="item"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">25</option>
                  </select>
                </SelectPage>
              </section>
            </Pagination>
          </SiderRight>
        </section>
      </Content>
    </Container>
  );
}
