import styled from 'styled-components';

export const Container = styled.div`
  margin: 95px 0px;
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #0a2156;
  }
  span {
    display: inline-block;
    font-weight: 450;
    font-size: 20px;
    line-height: 26px;
    color: #556282;
    margin-bottom: 35px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardItem = styled.div`
  background-color: #fff;
  .image {
    height: 242px;
  }
  .content-title {
    p {
      text-align: center;
      padding: 22px 0;
      font-size: 22px;
      color: #0a2156;
      font-weight: 500;
    }
  }
`;
