import styled from 'styled-components';
import { boxShadow, breakpoints } from '../../lib/styles/theme';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: ${boxShadow};
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 944px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;

export const InnerNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
