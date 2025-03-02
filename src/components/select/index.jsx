import Styles from './select.module.scss';

const Select = ({ placeholder, required, options }) => {
    return (
        <select required={required} className={Styles.select}>
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