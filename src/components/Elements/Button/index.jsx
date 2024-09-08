const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props; // memberikan default value
  return (
    <button
      className={`px-4 font-semibold rounded-md ${classname} text-white`} //awalnya ${props.classname} setelah di definisikan di atas maka dihapus daja propsnya
      type={type}
      onClick={onClick}
    >
      {children}
    </button> ////awalnya ${props.childern} setelah di definisikan di atas maka dihapus daja propsnya
  );
};

export default Button;
