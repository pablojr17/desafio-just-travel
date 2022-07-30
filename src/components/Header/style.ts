import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 101px;
`;

export const Content = styled.div`
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.WHITE_ICE};
  padding: 35px 60px;
`;

export const ContentLogin = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContentIcon = styled.section`
  border-right: 1px solid ${({ theme }) => theme.colors.WHITE_ICE};
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 16px;

  span {
    font-size: 12px;
  }
`;

export const ContentSignIn = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.BLUE};
    text-decoration: none;
    font-weight: 700;
  }
`;
