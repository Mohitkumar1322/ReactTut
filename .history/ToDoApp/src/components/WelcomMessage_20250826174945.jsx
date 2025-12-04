import styles from "./WelcomeMessage.module.css";

    
const WelcomeMessage = ({ todoItems }) => {
    return todoItems.length===0 && <p className={styles.welcome}>Welcome to the ToDo App!</p>;
};

export default WelcomeMessage;