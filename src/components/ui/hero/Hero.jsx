import React from 'react';
import { Button } from '../../../components';

const Hero = (props) => {
  return (
    <>
      <div
        id="hero"
        className="bg-primary-color heading-white-color p-5"
        style={{ height: '30rem' }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Hero;
