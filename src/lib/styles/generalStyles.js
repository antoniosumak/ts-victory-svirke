import styled from 'styled-components';
import { colors } from './theme';

export const Button = styled.button`
  padding: 12px 24px;
  color: ${colors.white};
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
  transition: 0.3s ease-in-out;
  margin-bottom: ${(props) =>
    props.bottomMargin ? `${props.bottomMargin}px ` : '0px'};

  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.blue};
  }
`;
