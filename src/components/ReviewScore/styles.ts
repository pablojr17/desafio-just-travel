import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 24px;
  h2 {
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.DARK_BLUE};
    margin-bottom: 12px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 12px;
      font-weight: 500;
      color: #556282;
    }
  }
`;

type IPrecentageProps = {
  percentage: number;
};

export const ProgressPercentage = styled.div<IPrecentageProps>`
  width: 189px;
  height: 30px;
  background: #d9d9d9;
  position: relative;

  div {
    height: 100%;
    width: ${({ percentage }) => percentage}%;
    background-color: #ffad0d;
  }

  span {
    position: absolute;
    top: 7px;
    left: 7px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }
`;
