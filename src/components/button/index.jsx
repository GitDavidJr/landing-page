import { ST } from "next/dist/shared/lib/utils";
import Styles from"./button.module.scss";  

const Button =({title, kind}) => {
    const generationkind = () => {
        if(kind === "secondary") {return Styles.secondary}
        if(kind === "full") {return Styles.full}
        return Styles.primary
    }
    

    return <button className={`${Styles.button} ${generationkind()}`} >{title}</button>
}

export default Button;