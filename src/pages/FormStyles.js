import styled from 'styled-components';
import { breakpoints, boxShadow, colors } from '../lib/styles/theme';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    max-width: 400px;
  }
`;

export const Title = styled.h2`
  padding-bottom: 16px;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  box-shadow: ${boxShadow};
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormRow = styled.div`
  margin: 16px 0px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0px;
  text-indent: 10px;
  border: 1px solid ${colors.grey};
  margin: 8px 0px;
  background-color: ${colors.white};

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border: 2px solid ${colors.blue};
  }
`;

export const InputError = styled.p`
  color: ${colors.red};
`;

export const FormFooter = styled.div`
  margin-top: 16px;
  text-align: center;
`;

export const FormFooterText = styled.p``;

export const LinkTo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.blue};
`;
