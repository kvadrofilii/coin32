import { useState, useEffect } from 'react';
import { Button } from '../../styles/components/Button';
import { Wrapper, ButtonClose, Content, Control, Image } from './ModalSlider.style';

// Переключаем на предыдущий слайд
const prevSlide = (slide, images, setSlide) => {
  (slide === 0) ? setSlide(images.length - 1) : setSlide(slide - 1);
}

// Переключаем на следующий слайд
const nextSlide = (slide, images, setSlide) => {
  (slide === images.length - 1) ? setSlide(0) : setSlide(slide + 1);
}

// Закрываем слайдер
const closeSlider = (setModalIsActive) => {
  setModalIsActive(false);
  // Включаю обратно прокрутку на сайте
  document.body.style.overflow = '';
}

const ModalSlider = (props) => {
  const { active, setModalIsActive, screenshots, imageNumber } = props;
  // Массив с адресами скриншотов
  const images = screenshots.results;
  // Текущий слайд для отображения
  const [slide, setSlide] = useState(imageNumber);

  // Получаем номер слайда для отображения при открытии слайдера
  useEffect(() => {
    setSlide(imageNumber);
  }, [imageNumber]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Вызывает функцию закрытия слайдера, если нажата кнопка Escape
      (e.code === 'Escape') && active && closeSlider(setModalIsActive);
      // Вызывает функцию переключения слайдера, если нажата стрелка влево
      (e.code === 'ArrowLeft') && prevSlide(slide, images, setSlide);
      // Вызывает функцию переключения слайдера, если нажата стрелка вправо
      (e.code === 'ArrowRight') && nextSlide(slide, images, setSlide);
    };
    // Вешаем слушатель нажатия кнопок на клавиатуре
    document.addEventListener('keydown', handleKeyDown);
    // Отключаем слушатель при размонтировании компонента
    return () =>
      document.removeEventListener('keydown', handleKeyDown);
  }, [images, setModalIsActive, slide, active]);

  return (
    <Wrapper active={active} >
      <ButtonClose onClick={() => closeSlider(setModalIsActive)}>
        X
      </ButtonClose>

      <Control>
        <Button onClick={() => prevSlide(slide, images, setSlide)}>
          &#060;
        </Button>
        <Button onClick={() => nextSlide(slide, images, setSlide)}>
          &#062;
        </Button>
      </Control>

      <Content>
        <Image src={images[slide].image} onClick={() => nextSlide(slide, images, setSlide)} />
      </Content>
    </Wrapper>
  );
}

export default ModalSlider;
