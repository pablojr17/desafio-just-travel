import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  padding-bottom: 31px;
  border-bottom: 1px solid #e7e9ed;
  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #0a2156;
    margin-bottom: 12px;
  }
`;

export const ContainerStar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const ContentStar = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 5px 5px;
  gap: 10px;
  border: 1px solid #ced2db;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-size: 14px;
    color: #b6bcc9;
    font-weight: 500;
  }
`;
