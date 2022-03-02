import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Container } from '../styles/layouts/Container';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';
import { Main } from '../styles/layouts/Main';

const Layout = () => {
	// Получаю информацию об адресе страницы
	const location = useLocation();

	return (
		<>
			<Header />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
			{/*Если страница главная, то вывожу кнопки пагинации*/}
			{location.pathname === '/' && <Pagination />}
			<Footer />
		</>
	);
}

export default Layout;
