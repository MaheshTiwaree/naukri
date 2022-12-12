const InputField = ({
  login: { id, type, name, label, placeholder },
  OnChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={OnChange}
      />
    </>
  );
};

export default InputField;
