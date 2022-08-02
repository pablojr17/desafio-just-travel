import { StarFilled } from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { Container, ContainerStar, ContentStar } from './styles';

export const PropertyType = () => {
  return (
    <Container>
      <h3>Tipo de propriedade</h3>

      <ContainerStar>
        <ContentStar>
          <div>
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
          </div>
          <span>(134)</span>
        </ContentStar>

        <ContentStar>
          <div>
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
          </div>
          <span>(134)</span>
        </ContentStar>

        <ContentStar>
          <div>
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
          </div>
          <span>(72)</span>
        </ContentStar>

        <ContentStar>
          <div>
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
          </div>
          <span>(75)</span>
        </ContentStar>

        <ContentStar>
          <div>
            <StarFilled
              style={{ fontSize: '18px', color: theme.colors.YELLOW }}
            />
          </div>
          <span>(07)</span>
        </ContentStar>
      </ContainerStar>
    </Container>
  );
};
