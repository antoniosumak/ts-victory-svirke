import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../components/Section/Section';
import {
  FormWrapper,
  Title,
  Form,
  Center,
  Input,
  FormRow,
  Label,
  InputError,
  FormFooter,
  FormFooterText,
  LinkTo,
} from './FormStyles';
import { Button } from '../lib/styles/generalStyles';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email type')
        .required('Email is required!'),
      password: Yup.string()
        .min(6, 'Password must contain at least 6 characters!')
        .required('Password is required!'),
    }),
  });

  return (
    <Section fullHeight>
      <Center>
        <FormWrapper>
          <Form>
            <Title>Prijava</Title>
            <FormRow>
              <Label htmlFor="email">Email adresa</Label>
              <Input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <InputError>{formik.errors.email}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Label htmlFor="password">Lozinka</Label>
              <Input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <InputError>{formik.errors.password}</InputError>
              ) : null}
            </FormRow>
            <Center>
              <Button bottomMargin={'24'}>Prijava</Button>
            </Center>
          </Form>
          <FormFooter>
            <FormFooterText>
              Nemaš račun? <LinkTo to="/register">Registriraj se</LinkTo>
            </FormFooterText>
          </FormFooter>
        </FormWrapper>
      </Center>
    </Section>
  );
};

export default Signup;
