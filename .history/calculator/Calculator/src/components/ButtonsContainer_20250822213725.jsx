
import styles from './Buttons.module.css';
const ButtonsContainer =()=>{
    const buttonsNames=["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]
    return (
        <div className={styles.button_container}>
          {buttonsNames.map((name, index) => (
            <button key={index} className={styles.button}>
              {name}
            </button>
          ))}
        </div>
    )

}

export default ButtonsContainer;
      <button className={styles.button}>9</button>
      <button className={styles.button}>/</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <button className={styles.button}>6</button>
      <button className={styles.button}>*</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>-</button>
      <button className={styles.button}>0</button>
      <button className={styles.button}>.</button>
      <button className={styles.button}>=</button>
      <button className={styles.button}>+</button>
    </div>
    )

}

export default ButtonsContainer;