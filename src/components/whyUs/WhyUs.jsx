import React from 'react';
import { whyUs } from '../../data/data';
import { Card } from '../../components';

const WhyUs = () => {
  console.log(whyUs);
  return (
    <div className="mt-5 ">
      <h3 className="mb-5 fs-3" style={{ marginLeft: '21.5%' }}>
        Why Us
      </h3>
      <div
        className="d-flex justify-content-center flex-wrap gap-3 me-5"
        style={{ margin: '0 auto' }}
      >
        {whyUs.map((about) => (
          <Card
            key={about.id}
            heading={about.heading}
            content={about.content}
            font="1.3rem"
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
