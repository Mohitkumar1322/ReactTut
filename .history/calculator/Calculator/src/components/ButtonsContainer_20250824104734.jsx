import styles from './Buttons.module.css';

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "7","8","9","/","4","5","6","*",
    "1","2","3","-","0",".","C","=","+"
  ];

  return (
    <div className={styles.button_container}>
      {buttonsNames.map((name, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(name)} // ✅ pass value to App
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
