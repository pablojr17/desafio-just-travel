import { useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { Container, ContentMenu, HeaderContentInput } from './styles';
import SelectOneMenu from '../../../public/images/select1.svg';
import SelectTwoenu from '../../../public/images/select.svg';
import Image from 'next/image';
import { Col, Row } from 'antd';
export default function HomePage() {
  const [search, setSearch] = useState();
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

      <Row gutter={{ md: 16 }}>
        <Col style={{ backgroundColor: '#f59' }} span={8}>
          col-8
        </Col>
        <Col span={8}>col-8</Col>
      </Row>
    </Container>
  );
}
