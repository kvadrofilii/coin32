import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${baseTheme.colors.dark};
  border-radius: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px 20px 0 0;
  object-position: center top;
  object-fit: cover;

  @media (min-width: ${baseTheme.media.tablet}) {
    height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  line-height: 110%;
  color: ${baseTheme.colors.font};
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding-top: 5px;
    color: ${baseTheme.colors.font};
  }
`;
