import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${baseTheme.media.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-position: center top;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImageScreenshot = styled(Image)`
  height: 150px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  flex-basis: 53%;
`;

export const ImageWrapper = styled.div`
  flex-basis: 45%;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 150%;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 150%;
  padding-top: 10px;
`;

export const Description = styled.p`
  text-align: justify;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${baseTheme.media.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    padding-top: 5px;
  }
`;

export const Screenshots = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
`;
