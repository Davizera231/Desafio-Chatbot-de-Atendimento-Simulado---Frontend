const Input = ({
  type = 'text',
  className = '',
  placeholder = '',
  value = '',
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;