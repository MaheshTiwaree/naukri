import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Card, ContentBox, Hero, JobsPostedItem } from '../../components';
import { jobPosted } from '../../data/data';
import { userRequest } from '../../utils/requestMethods';
import axios from 'axios';

const JobPosted = () => {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostedJob = async () => {
      try {
        const res = await axios.get(
          'https://jobs-api.squareboat.info/api/v1/recruiters/jobs',
          {
            headers: { Authorization: `${localStorage.getItem('token')}` },
          }
        );
        console.log(res);
        setJobsData(res.data.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPostedJob();
  }, []);

  if (!loading) {
    return (
      <div>
        <Hero>
          <div style={{ marginLeft: '11rem' }}>
            <div className="d-flex mt-4 ">
              <AiFillHome color="white" size={16} />
              <Link to="/">
                <h4 className="ms-3">Home</h4>
              </Link>
            </div>
            <h3 className="mt-5">Jobs posted by you</h3>
          </div>
        </Hero>
        <ContentBox style={{ width: '70%' }}>
          <div style={{ marginLeft: '11rem', marginTop: '-11rem' }}>
            <div className="d-flex flex-wrap">
              {/* {jobPosted.map((jobs) => (
              <JobsPostedItem
                key={jobs.id}
                heading={jobs.header}
                content={jobs.content}
                location={jobs.location}
              />
            ))} */}
              {jobsData.map((jobs) => (
                <JobsPostedItem
                  key={jobs.id}
                  heading={jobs.title}
                  content={jobs.description}
                  location={jobs.location}
                />
              ))}
            </div>
          </div>
        </ContentBox>
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
};

export default JobPosted;
