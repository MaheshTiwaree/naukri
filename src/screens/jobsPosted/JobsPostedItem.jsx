import React, { useState } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Button, ViewApplicants } from '../../components';

const JobsPostedItem = ({ heading, content, location }) => {
  const [applicantsModel, setApplicantsModel] = useState(false);

  const applicantsModelHandler = () => {
    setApplicantsModel(!applicantsModel);
  };
  return (
    <div>
      <div
        className="cardBox m-3"
        style={{ height: '14vh', overflow: 'hidden' }}
      >
        <h4>{heading}</h4>
        <p>{content}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <MdOutlineLocationOn color="blue" />
            <p className="ms-3" style={{ marginTop: '-4px' }}>
              {location}
            </p>
          </div>
          <div style={{ marginTop: '-1rem' }} onClick={applicantsModelHandler}>
            <Button
              btnText="View Application"
              bg="bg-secondary-color"
              btnpadding="p-0"
            />
          </div>
        </div>
      </div>
      {applicantsModel && <ViewApplicants closeModel={setApplicantsModel} />}
    </div>
  );
};

export default JobsPostedItem;
