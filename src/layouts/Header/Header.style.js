import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  border-bottom: 3px solid ${baseTheme.colors.dark};
  flex-shrink: 0;
  z-index: 10;

  @media (min-width: ${baseTheme.media.tablet}) {
    height: 100px;
  }
`;

export const Content = styled.header`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  column-gap: 20px;
  justify-items: center;
  z-index: 11;

  @media (min-width: ${baseTheme.media.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
