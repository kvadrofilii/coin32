import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  align-items: flex-start;

  @media (min-width: ${baseTheme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 20px;
  }

  @media (min-width: ${baseTheme.media.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
