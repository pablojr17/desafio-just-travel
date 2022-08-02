import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.WHITE_ICE};

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

  label {
    display: flex;
    gap: 10px;
    margin-left: 8px;

    span {
      font-family: 'Circular';
      font-size: 14px;
    }
  }
`;
