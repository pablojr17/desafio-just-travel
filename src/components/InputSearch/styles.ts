import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const ContentInputSearch = styled.div`
  border: 0.6px solid #ced2db;
  padding: 12px;
  height: 48px;

  > span {
    display: flex;
    align-items: center;
    height: 100%;
    border: none;
  }

  input {
    color: #9ea5b8;
    padding-left: 12px;
    border: none;
    width: 267px;
    height: 22px;
    outline: none;
  }
`;
export const ContentDate = styled.div`
  border: 0.6px solid #ced2db;
  padding: 12px;
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;

  > div {
    border: none;
    display: flex;
    align-items: center;
    height: 100%;

    > div {
      > span {
        background-color: firebrick;
        padding-left: 7px;
        display: none;
      }
    }
  }
  input {
    padding-left: 17px;
    border: none;
    &::placeholder {
      font-weight: 500;
    }
  }
`;
export const ContentSearch = styled.div`
  border: 0.6px solid #ced2db;
  padding: 0;
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg path {
    fill: #ccc;
  }
`;
