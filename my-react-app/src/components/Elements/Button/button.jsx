const Button = (props) => {
  const { variant, children, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`${variant} px-4 py-2  text-white fw-bold`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
