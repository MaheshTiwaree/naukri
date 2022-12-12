import { useState } from 'react';
import logo from '../../assests/MyJobs.svg';
import { Button, UserLogo, Login } from '../../components';
import { IsAuth } from '../../utils/Auth';

const Navbar = () => {
  const [openModel, setOpenModel] = useState(false);
  const openModelHandler = () => {
    setOpenModel(!openModel);
  };
  return (
    <>
      <div className="bg-primary-color ">
        <div className="d-flex justify-content-between mx-4 py-3 border-bottom">
          <img src={logo} alt="naukri_logo" />

          {IsAuth() ? (
            <UserLogo />
          ) : (
            <Button
              // bg="btn-tertiary-color"
              // btnPadding="py-2 px-4"
              // textColor="heading-white-color"
              btnText="Login"
              btnType="secondaryBtn"
              onClick={openModelHandler}
            />
          )}
        </div>
      </div>
      {openModel && <Login closeModel={setOpenModel} />}
    </>
  );
};

export default Navbar;
