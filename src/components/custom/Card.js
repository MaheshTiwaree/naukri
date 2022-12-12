const Card = ({ heading, content, font }) => {
  // console.log('about ' + whyUs);
  return (
    <div className="cardBox">
      <h4 className="heading-primary-color mb-3" style={{ width: '70%' }}>
        {heading}
      </h4>
      <p style={{ fontSize: `${font}` }}>{content}</p>
    </div>
  );
};

export default Card;
