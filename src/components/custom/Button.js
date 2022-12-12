import { Fragment } from 'react';

const Button = ({ btnType, btnText, bg, btnPadding, textColor, onClick }) => {
  return (
    <div
      id="button"
      className={`btn ${btnType} ${bg} ${btnPadding} ${textColor} `}
      type="btn"
      onClick={onClick}
    >
      {btnText}
    </div>
  );
};
export default Button;
