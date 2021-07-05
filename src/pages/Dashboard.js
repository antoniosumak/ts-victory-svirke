import React, { useState, useContext, useEffect } from 'react';
import Section from '../components/Section/Section';
import { useFormik } from 'formik';
import { db } from '../firebase';
import {
  DashboardWrapper,
  DashboardFeatures,
  DashboardData,
  TableWrapper,
  TableHeader,
  TableContent,
  Tr,
  Td,
  Th,
} from './DashboardStyles';

import { Button } from '../lib/styles/generalStyles';

import { FormRow, Label, Input, Form } from './FormStyles';
const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tempArray = [];
    db.collection('gigs').onSnapshot((query) => {
      query.forEach((dataResponse) => {
        tempArray.push(dataResponse.data());
      });
      setPosts(tempArray);
      setLoading(false);
      tempArray = [];
    });
  }, [loading]);

  console.log(posts);

  const formik = useFormik({
    initialValues: {
      celebration: '',
      location: '',
      date: '',
    },

    onSubmit: async (values) => {
      await db.collection('gigs').add(values);
    },
  });
  return (
    <Section>
      <DashboardWrapper>
        <DashboardFeatures>
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <Label htmlFor="celebration">Prigoda</Label>
              <Input
                id="celebration"
                type="text"
                {...formik.getFieldProps('celebration')}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="location">Lokacija</Label>
              <Input
                id="location"
                type="text"
                {...formik.getFieldProps('location')}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="date">Datum</Label>
              <Input id="date" type="date" {...formik.getFieldProps('date')} />
            </FormRow>
            <Button type="submit">Dodaj na popis</Button>
          </Form>
        </DashboardFeatures>
        <DashboardData>
          <TableWrapper>
            <TableHeader>
              <Tr>
                <Th>Prigodba</Th>
                <Th>Lokacija</Th>
                <Th>Datum</Th>
              </Tr>
            </TableHeader>
            <TableContent>
              {posts.length !== 0 &&
                posts.map((values, index) => (
                  <Tr key={index}>
                    <Td>{values.celebration}</Td>
                    <Td>{values.location}</Td>
                    <Td>{`${values.date.split('-')[2]}.${
                      values.date.split('-')[1]
                    }.${values.date.split('-')[0]}.`}</Td>
                  </Tr>
                ))}
            </TableContent>
          </TableWrapper>
        </DashboardData>
      </DashboardWrapper>
    </Section>
  );
};

export default Dashboard;
