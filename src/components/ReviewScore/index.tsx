import React from 'react';
import { data } from '../../Mocks/MockReviewScore';
import { Container, Content, ProgressPercentage } from './styles';

export const ReviewScore = () => {
  return (
    <Container>
      <h2>Review Score</h2>

      <Content>
        {data.map((item) => (
          <div key={item.id} className="item">
            <ProgressPercentage percentage={item.percentage}>
              <div></div>
              <span>{item.size}+</span>
            </ProgressPercentage>
            <span>{item.nota}</span>
          </div>
        ))}
      </Content>
    </Container>
  );
};
