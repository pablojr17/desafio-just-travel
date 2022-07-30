import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const FooterPrimary = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 65px 62px 37px 62px;
`;
export const ContentLeft = styled.div`
  max-width: 384px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 500;
    line-height: 18px;
  }
`;

export const ContentSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const ContentRight = styled.div`
  display: flex;
  gap: 36px;

  div {
    span {
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.WHITE};
    }

    ul {
      margin-top: 8px;
      list-style: none;

      li {
        margin-bottom: 8px;
        a {
          text-decoration: none;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.WHITE};
        }
      }
    }
  }
`;

export const FooterSecundary = styled.div`
  background-color: ${({ theme }) => theme.colors.GREEN};
  width: 100%;
  height: 85px;
`;

export const ContentInfoSecundary = styled.div`
  padding: 34px 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.WHITE};
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
