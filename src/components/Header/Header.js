import React, { useContext } from 'react';
import { HeaderWrapper, Navigation } from './HeaderStyles';
import { Button } from '../../lib/styles/generalStyles';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

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
        {user && <Button onClick={handleLogout}>Odjavi se</Button>}
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
