import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 56px;
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;
export const InfoBanner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
`;

export const InfoBannerSecundary = styled.div`
  max-width: 900px;

  .note {
    display: flex;
    align-items: center;
    gap: 10px;

    .score {
      background-color: ${theme.colors.DARK_BLUE};
      border-radius: 2px;
      width: 40px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: ${theme.colors.WHITE};
        font-weight: 500;
        font-size: 14px;
      }
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: ${theme.colors.DARK_BLUE};
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

export const InfoBannerTertiary = styled.div`
  .content_location {
    h1 {
      font-weight: 500;
      font-size: 22px;
      color: ${theme.colors.DARK_BLUE};
      margin-bottom: 8px;
    }
    .content_map {
      width: 100%;
      height: 340px;
      background-color: #ccc;
      iframe {
        border: none;
      }
    }
  }
`;

export const ContentSobre = styled.div`
  h1 {
    font-weight: 500;
    font-size: 22px;
    color: ${theme.colors.DARK_BLUE};
    margin-bottom: 8px;
  }
  p {
    color: #9ea5b8;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const ContentIcons = styled.div`
  margin: 24px 0 34px 0px;
  display: flex;
  align-items: center;
  gap: 15px;
  p {
    display: flex;
    margin-bottom: 0;
    gap: 9px;
    font-weight: 500;
    font-size: 14px;
    color: #9ea5b8;
  }
`;

export const SectionPrimary = styled.div`
  margin-bottom: 37px;
  h3 {
    display: flex;
    gap: 20px;
    font-weight: 700;
    font-size: 24px;
    color: ${theme.colors.DARK_BLUE};
    margin-bottom: 0;
  }
  p {
    margin-left: 30px;
    display: flex;
    align-items: center;
    gap: 9px;
    font-weight: 450;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const ContentBanner = styled.div`
  height: 434px;
  position: relative;

  > button {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 16px 18px;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    color: ${theme.colors.DARK_BLUE};
    font-weight: 500;
    font-size: 16px;
    border: none;
    z-index: 2;
  }
`;

export const TicketCard = styled.div`
  background-color: ${theme.colors.WHITE};
  width: 353px;
  padding: 24px;
  border-radius: 4px;
  height: fit-content;
`;

export const ContentDate = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  border-bottom: 1px solid ${theme.colors.WHITE_ICE};
  margin-bottom: 24px;
  > div {
    display: flex;
    gap: 17px;
    .info {
      p {
        font-weight: 700;
        font-size: 16px;
        color: ${theme.colors.DARK_BLUE};
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
        font-size: 16px;
        color: #9ea5b8;
      }
    }
  }
`;

export const ContentCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${theme.colors.WHITE_ICE};
  .item {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 500;
      font-size: 16px;
      color: #9ea5b8;
    }
  }
`;

export const ContentPrice = styled.div`
  margin-top: 24px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    p {
      font-weight: 700;
      font-size: 16px;
      color: ${theme.colors.DARK_BLUE};
      margin-bottom: 0;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
      color: ${theme.colors.DARK_BLUE};
      margin-bottom: 0;
    }
  }
  button {
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${theme.colors.DARK_BLUE};
    color: ${theme.colors.WHITE};
    border-radius: 4px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
  }
`;
export const ContentLoad = styled.div`
  height: 640px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
