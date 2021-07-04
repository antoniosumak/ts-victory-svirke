import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const SectionWrapper = styled.section`
  padding: 40px 15px;
  width: 100%;
  @media screen and (${breakpoints.tablet}) {
    padding: 64px 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    padding: 80px 0;
    max-width: 944px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;
