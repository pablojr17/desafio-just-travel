import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.WHITE_ICE};
  h3 {
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.DARK_BLUE};
    margin-bottom: 12px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    input[type='radio'] {
      display: none;

      &:checked + label {
        border: 1px solid ${theme.colors.DARK_BLUE};
        color: #fff;

        span {
          color: ${theme.colors.DARK_BLUE};
        }
      }
    }
    label {
      display: flex;
      align-items: center;
      gap: 13px;
      width: 100%;
      padding: 8px;
      border-radius: 2px;
      border: 1px solid ${theme.colors.GRAY};
      font-size: 13px;
      font-weight: 500;
      span {
        color: ${theme.colors.GRAY};
      }
      img {
        color: ${theme.colors.GRAY};
      }
    }
  }
`;
