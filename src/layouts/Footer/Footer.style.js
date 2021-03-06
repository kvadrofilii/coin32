import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  border-top: 3px solid ${baseTheme.colors.dark};
  flex-shrink: 0;
`;
