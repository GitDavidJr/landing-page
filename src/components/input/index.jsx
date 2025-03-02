import "./input.module.scss"
import Styles from "./input.module.scss";

const Imput = ({ type, placeholder, pattern, required }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required
      className={Styles.input}
    />
  );
};


export default Imput;