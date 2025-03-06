import Styles from "./select.module.scss";

const Select = ({ placeholder, required, options, id, onChange, name }) => {
  return (
    <select
      id={id}
      name={name}
      required={required}
      className={Styles.select}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
