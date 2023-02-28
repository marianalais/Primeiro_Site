import "./styles.css";

function Input({value, onChange, placeholder, ...rest }) {
  return (
      <input
        {...rest}
         placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
  );
}

export default Input;


