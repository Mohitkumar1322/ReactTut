import styles from "./WelcomeMessage.module.css";

    
const WelcomeMessage = ({ todoItems }) => {
    return todoItems.length && <p className={styles.welcome}>Welcome to the ToDo App!</p>;
};

export default WelcomeMessage;