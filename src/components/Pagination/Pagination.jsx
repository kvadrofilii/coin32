import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateUrl } from '../../app/reducers/games';
import { Wrapper, Control, ButtonPrev, ButtonNext } from './Pagination.style';

export default function Pagination() {
  const dispatch = useDispatch();
  const { prevUrl, nextUrl } = useSelector((state) => state.games);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    (prevUrl === null) && setIsPrev(false);
    (nextUrl === null) && setIsNext(false);
  }, [prevUrl, nextUrl])

  // Переключаем на предыдущую страницу
  const prevSlide = () => {
    if (prevUrl !== null) {
      dispatch(stateUrl(prevUrl));
      setIsNext(true);
    }
  }

  // Переключаем на следующую страницу
  const nextSlide = () => {
    if (nextUrl !== null) {
      dispatch(stateUrl(nextUrl));
      setIsPrev(true);
    }
  }

  return (
    <Wrapper>
      <Control>
        <ButtonPrev onClick={prevSlide} isPrev={isPrev}>
          &#060;
        </ButtonPrev>
        <ButtonNext onClick={nextSlide} isNext={isNext}>
          &#062;
        </ButtonNext>
      </Control>
    </Wrapper>
  );
}
