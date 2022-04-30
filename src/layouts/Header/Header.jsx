import { Container } from '../../styles/layouts/Container';
import { Logo } from '../../styles/components/Logo';
import Search from '../../components/Search/Search';
import { Link } from 'react-router-dom';
import Platforms from '../../components/Platforms/Platforms';
import { useLocation } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import { Wrapper, Content } from './Header.style';

const Header = () => {
  // Получаю информацию об адресе страницы
  const location = useLocation();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to={`/`}>
            <Logo>RAWG</Logo>
          </Link>
          {location.pathname === '/' && <><Sort /><Platforms /></>}
          <Search />
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Header;
