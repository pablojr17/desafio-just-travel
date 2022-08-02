import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div``;

export const HeaderContentInput = styled.div`
  background-color: ${theme.colors.WHITE};
  height: 120px;
  .content {
    max-width: 1320px;
    margin: 0 auto;
    padding: 36px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 86px;

  section {
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
  }
`;

export const CardPrice = styled.div``;

export const Sider = styled.div`
  background-color: ${theme.colors.WHITE};
  width: 367px;
  padding: 24px;
  max-height: 1100px;

  .section-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.WHITE_ICE};
    padding-bottom: 12px;
    h4 {
      color: ${theme.colors.DARK_BLUE};
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 0;
    }
    span {
      font-weight: 450;
      font-size: 14px;
      color: #3570bf;
    }
  }
`;

export const SiderRight = styled.div`
  width: 929px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  .info {
    display: flex;
    align-items: center;

    > span {
      font-weight: 400;
      font-size: 12px;
      color: #828292;
    }
  }
`;

export const SelectPage = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-weight: 500;
    font-size: 12px;
    padding-right: 8px;
    margin-bottom: 0px;
  }
  select {
    width: 69px;
    height: 28px;
    border: 1px solid #8a90bd;
    border-radius: 5px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.DARK_BLUE};
`;
