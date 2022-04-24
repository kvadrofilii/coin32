import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { Button } from '../../styles/components/Button';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.9);
  transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
  z-index: 100;
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Content = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  border-radius: 10px;
  background-color: ${baseTheme.colors.dark};

  @media (min-width: ${baseTheme.media.tablet}) {
    width: 80%;
  }
`;

export const Control = styled.div`
  width: 120px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-position: center top;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  cursor: pointer;
`;
