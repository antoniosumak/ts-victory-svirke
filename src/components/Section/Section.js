import React from 'react';
import { SectionWrapper } from './SectionStyles';

const Section = ({ children, fullHeight }) => {
  return <SectionWrapper fullHeight={fullHeight}>{children}</SectionWrapper>;
};

export default Section;
