import Styles from "./loading.module.scss";

const Loading = () => {
    return (
        <div className={Styles.overlay}>
            <div className={Styles.loading} />
        </div>
    );
};

export default Loading;
