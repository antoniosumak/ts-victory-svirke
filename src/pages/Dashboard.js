import React, { useState, useContext, useEffect } from 'react';
import Section from '../components/Section/Section';
import { useFormik } from 'formik';
import { db } from '../firebase';
import moment from 'moment';
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
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  useEffect(() => {
    let tempArray = [];
    db.collection('gigs')
      .orderBy('date')
      .onSnapshot((query) => {
        query.forEach((dataResponse) => {
          const tempObj = {
            id: dataResponse.id,
            celebration: dataResponse.data().celebration,
            date: dataResponse.data().date,
            location: dataResponse.data().location,
          };
          tempArray.push(tempObj);
        });
        setPosts(tempArray);
        setLoading(false);

        tempArray = [];
      });
  }, [loading]);

  const deleteEvent = (id) => {
    db.collection('gigs').doc(id).delete();
  };

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
              <Label htmlFor='celebration'>Prigoda</Label>
              <Input
                id='celebration'
                type='text'
                {...formik.getFieldProps('celebration')}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='location'>Lokacija</Label>
              <Input
                id='location'
                type='text'
                {...formik.getFieldProps('location')}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='date'>Datum</Label>
              <Input id='date' type='date' {...formik.getFieldProps('date')} />
            </FormRow>
            <Button type='submit'>Dodaj na popis</Button>
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
                posts.map((values, index) => {
                  const done = moment(values.date).isBefore(moment());
                  return (
                    <Tr
                      key={index}
                      onDoubleClick={() => deleteEvent(values.id)}
                    >
                      <Td done={done}>{values.celebration}</Td>
                      <Td done={done}>{values.location}</Td>
                      <Td done={done}>{`${values.date.split('-')[2]}.${
                        values.date.split('-')[1]
                      }.${values.date.split('-')[0]}.`}</Td>
                    </Tr>
                  );
                })}
            </TableContent>
          </TableWrapper>
        </DashboardData>
      </DashboardWrapper>
    </Section>
  );
};

export default Dashboard;
