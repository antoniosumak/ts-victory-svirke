import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../components/Section/Section';
import {
  FormWrapper,
  Form,
  Center,
  Input,
  FormRow,
  Label,
  InputError,
  FormFooter,
  FormFooterText,
} from './FormStyles';
import { Button } from '../lib/styles/generalStyles';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email type')
        .required('Email is required!'),
      password: Yup.string()
        .min(6, 'Password must contain at least 6 characters!')
        .required('Password is required!'),
      passwordConfirmation: Yup.string().test(
        'password-match',
        'Passwords must match',
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),
  });

  return (
    <Section>
      <Center>
        <FormWrapper>
          <Form>
            {' '}
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
            <FormRow>
              <Label htmlFor="passwordConfirmation">Potvrdi lozinku</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                {...formik.getFieldProps('passwordConfirmation')}
              />
              {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation ? (
                <InputError>{formik.errors.passwordConfirmation}</InputError>
              ) : null}
            </FormRow>
            <Center>
              <Button bottomMargin={'24'}>Registriraj se</Button>
            </Center>
          </Form>
          <FormFooter>
            <FormFooterText>Već imaš račun? Prijavi se</FormFooterText>
          </FormFooter>
        </FormWrapper>
      </Center>
    </Section>
  );
};

export default Signup;
