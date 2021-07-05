import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Navigation,
  InnerNavigation,
  Image,
} from './HeaderStyles';
import { Button } from '../../lib/styles/generalStyles';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };
  return (
    <HeaderWrapper>
      <Navigation>
        {user && (
          <InnerNavigation>
            <Link to="/">
              <Image src={logo} alt={'logo'} />
            </Link>
            <Button onClick={handleLogout}>Odjavi se</Button>
          </InnerNavigation>
        )}
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
