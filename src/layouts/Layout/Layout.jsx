import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container } from '../../styles/layouts/Container';
import Pagination from '../../components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';
import { Main } from '../../styles/layouts/Main';
import { useSelector } from 'react-redux';

const Layout = () => {
  // Получаю информацию об адресе страницы
  const location = useLocation();
  // Переменные для: данных с играми, состояния загрузки и адреса для загрузки данных с сервера
  const { isLoaded } = useSelector((state) => state.games);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      {/*Если загрузка закончилась и страница главная, то вывожу кнопки пагинации*/}
      {!isLoaded && (location.pathname === '/' && <Pagination />)}
      <Footer />
    </>
  );
}

export default Layout;
