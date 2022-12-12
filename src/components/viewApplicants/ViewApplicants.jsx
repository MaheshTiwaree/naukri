import { AiOutlineClose } from 'react-icons/ai';

const ViewApplicants = ({ closeModel }) => {
  const closeModelHandler = () => {
    closeModel(false);
  };

  return (
    <div id="view-applicants">
      <div className="p-4">
        <div className="d-flex justify-content-between pb-3 border-bottom">
          <p>Applicants for this job</p>
          <div onClick={closeModelHandler} style={{ cursor: 'pointer' }}>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <p>0 applicants</p>

        <div
          className="text-center align-items-center"
          style={{ border: 'blue', height: '45vh', backgroundColor: '#A9AFBC' }}
        >
          <p className="">No application available!</p>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicants;
