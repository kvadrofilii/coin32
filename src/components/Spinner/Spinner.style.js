import styled, { keyframes } from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  border: 3px solid transparent;
  border-top-color: ${baseTheme.colors.light};
  top: 50%;
  left: 50%;
  margin: -30px;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;
