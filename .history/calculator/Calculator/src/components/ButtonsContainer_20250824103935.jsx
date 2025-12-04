
import styles from './Buttons.module.css';
const ButtonsContainer =()=>{
    const buttonClicker = (event) =>{
        console.log(event.target.innerText);
    }
    const buttonsNames=["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]
    return (
        <div className={styles.button_container}>
          {buttonsNames.map((name, index) => (
            <button key={index} className={styles.button} onClick={()=> buttonClicker()}>
              {name}

            </button>
          ))}
        </div>
    )

}

export default ButtonsContainer;


