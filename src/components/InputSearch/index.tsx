import { CalendarTwoTone, SearchOutlined } from '@ant-design/icons';
import { DatePicker, Input } from 'antd';
import React, { Dispatch } from 'react';
import { theme } from '../../styles/theme';
import { GoLocation } from 'react-icons/go';
import Calendar from '../../../public/images/calendar.svg';
import {
  Container,
  ContentDate,
  ContentInputSearch,
  ContentSearch,
} from './styles';
import Image from 'next/image';

interface IInputProps {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}
export default function InputSearch({ search, setSearch }: IInputProps) {
  return (
    <Container>
      <ContentInputSearch>
        <Input
          placeholder="GetYourGuide Tours & Tickets GmbH"
          prefix={<GoLocation size={22} color={theme.colors.BLUE} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </ContentInputSearch>
      <ContentDate>
        <Image src={Calendar} alt="Calendario" width={24} height={24} />

        <DatePicker placeholder="22/12/19" open={false} />
      </ContentDate>
      <ContentSearch>
        <SearchOutlined
          style={{ fontSize: '20px', color: theme.colors.BLUE }}
        />
      </ContentSearch>
    </Container>
  );
}
