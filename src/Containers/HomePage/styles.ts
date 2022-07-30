import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderContentInput = styled.div`
  background-color: #fff;
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

export const ContentMain = styled.div`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 86px;
  .content {
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
  }
`;

export const CardPrice = styled.div``;

export const SidebarFilter = styled.div`
  background-color: #fff;
  width: 367px;
  padding: 24px;
  height: fit-content;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e9ed;
    padding-bottom: 12px;
    h4 {
      color: #0a2156;
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

export const Main = styled.div`
  width: 929px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  .content_pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    .page-info {
      display: flex;
      align-items: center;
      .contentSelect {
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
      }
      .result {
        font-weight: 400;
        font-size: 12px;
        color: #828292;
        padding-right: 24px;
      }
    }
    .pagination {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 0px;
      gap: 10px;
      .page-num {
        padding: 7px 14px;
        font-size: 14px;
        color: #455cc7;
        border-radius: 4px;
        &:hover {
          background-color: #455cc7;
          color: #fff;
        }
      }
      .active {
        a {
          background-color: #455cc7;
          color: #fff;
        }
      }
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #0a2156;
`;
