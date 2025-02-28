import Styles from"./button.module.scss";  

const Button =({title}) => {
    return <button className={Styles.button}>{title}</button>
}

export default Button;