import styled from 'styled-components';
import { Button } from '../../styles/components/Button';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Control = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonPrev = styled(Button)`
  opacity: ${props => props.isPrev ? '100%' : '50%'};
  cursor: ${props => props.isPrev ? 'pointer' : 'auto'};
  pointer-events: ${props => props.isPrev ? 'auto' : 'none'};
  user-select: ${props => props.isPrev ? 'auto' : 'none'};

  :hover {
    opacity: ${props => props.isPrev ? '80%' : '50%'};
  }
`;

export const ButtonNext = styled(Button)`
  opacity: ${props => props.isNext ? '100%' : '50%'};
  cursor: ${props => props.isNext ? 'pointer' : 'auto'};
  pointer-events: ${props => props.isNext ? 'auto' : 'none'};
  user-select: ${props => props.isNext ? 'auto' : 'none'};

  :hover {
    opacity: ${props => props.isNext ? '80%' : '50%'};
  }
`;
