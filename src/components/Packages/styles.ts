import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const Content = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const SectionPackage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
    max-width: 970px;

    p {
      color: #fff;
      font-weight: 500;
      font-size: 22px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.BLUE};
  border: none;
  padding: 19px 17px;
  font-size: 16px;
  border-radius: 4px;
  line-height: 18px;
`;
