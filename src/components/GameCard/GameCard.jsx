import { Link } from 'react-router-dom';
import { Wrapper, Image, ContentWrapper, Title, Ul } from './GameCard.style';

const dateReleased = (date) => {
  const americanDate = date.split('-');
  const result = `${americanDate[2]}.${americanDate[1]}.${americanDate[0]}`;
  return result;
}

const GameCard = (props) => {
  const { name, rating, released, background_image, slug } = props;

  return (
    <Link to={`game/${slug}`}>
      <Wrapper>
        <Image src={background_image} />
        <ContentWrapper>
          <Title>{name}</Title>
          <Ul>
            <li>
              Release date: {dateReleased(released)}
            </li>
            <li>
              Rating: {rating}
            </li>
          </Ul>
        </ContentWrapper>
      </Wrapper>
    </Link>
  );
}

export default GameCard;
