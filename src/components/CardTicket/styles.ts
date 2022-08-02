import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 233px;
  display: flex;
  display: flex;
  justify-content: space-between;
`;

export const SiderLeft = styled.div`
  display: flex;
`;

export const ContentImage = styled.div`
  width: 213px;
  height: 233px;
  position: relative;
  background-color: red;

  button {
    position: absolute;
    padding: 4px 12px;
    top: 14px;
    left: 14px;
    box-shadow: 0px 4px 8px rgba(11, 31, 77, 0.1);
    border-radius: 15px;
    border: none;
    font-size: 12px;
    color: ${theme.colors.DARK_BLUE};
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
    z-index: 2;
    &:hover {
      background-color: ${theme.colors.DARK_BLUE};
      color: ${theme.colors.WHITE};
    }
  }
  > div {
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
    z-index: 2;
    &:hover {
      svg path {
        fill: #fff;
      }
    }
  }
`;

export const ContentInfo = styled.div`
  height: 100%;
  padding-top: 35px;
  padding-left: 24px;

  h2 {
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.DARK_BLUE};
  }
  span {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    color: #3c4c70;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .points {
    margin-top: 47px;
    display: flex;
    align-items: center;
    gap: 10px;

    .score {
      background-color: #4070f4;
      border-radius: 2px;
      width: 40px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.DARK_BLUE};
      margin-bottom: 0;
    }
    span {
      display: inline-block;
      color: #9ea5b8;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export const SiderRight = styled.div`
  margin: auto 0;
  height: 166px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.WHITE_ICE};
  > span {
    font-weight: 450;
    font-size: 14px;
    color: #858fa6;
  }
  > p {
    display: flex;
    color: #4070f4;
    font-weight: 700;
    font-size: 24px;
    span {
      display: inline-block;
      font-weight: 450;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.DARK_BLUE};
    }
  }
`;
