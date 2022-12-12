import { Link } from 'react-router-dom';
import { Navbar, Hero, ContentBox, WhyUs, Button } from '../../components';
import hero from '../../assests/hero.png';

const Home = () => {
  return (
    <div className="">
      <Hero>
        <div className="d-flex justify-content-evenly ">
          <div className="">
            <h1 className="py-5" style={{ fontSize: '5rem' }}>
              Welcome to <br />
              My<span className="heading-primary-color">Jobs</span>
            </h1>
            <Link to="/jobs">
              <Button
                btnText="Get Started"
                textColor="heading-white-color"
                bg="btn-primary-color"
                btnPadding="px-4 py-2"
              />
            </Link>
          </div>
          <div className="col-5 overflow-visible">
            <img
              src={hero}
              alt="hero-img"
              className="img-fluid z-index-1 "
              style={{}}
            />
          </div>
        </div>
      </Hero>
      <ContentBox>
        <div className="py-5 my-5">
          <WhyUs />
        </div>
      </ContentBox>
    </div>
  );
};

export default Home;
