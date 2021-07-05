import styled from 'styled-components';
import { breakpoints, colors, boxShadow } from '../lib/styles/theme';

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;

  @media screen and (${breakpoints.desktopLarge}) {
    flex-direction: row;
  } ;
`;

export const DashboardFeatures = styled.div`
  width: 100%;
  margin-bottom: 48px;
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 25%;
    margin-bottom: 0px;
  } ;
`;

export const DashboardData = styled.div`
  width: 100%;
  @media screen and (${breakpoints.desktopLarge}) {
    width: 65%;
  } ;
`;

export const TableWrapper = styled.table`
  border: none;
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  box-shadow: ${boxShadow};
`;

export const TableHeader = styled.thead`
  background-color: ${colors.blue};
  color: ${colors.white};
  text-align: left;
  border: none;
`;

export const TableContent = styled.tbody`
  color: ${colors.black};
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  border: none;
  padding: 10px;
`;
