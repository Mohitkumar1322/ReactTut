

import styles from './App.module.css';


function App() {
  

  return (
   <div className={styles.calculator}>
    <input type="text" className={styles.display} disabled />
    <div className={styles.button}>
      
      <button className={styles.button}>7</button>
      <button className={styles.button}>8</button>
      <button className={styles.button}>9</button>
      <button className={styles.button}>/</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <button>6</button>
      <button>*</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      <button>+</button>
    </div>
   </div>
  )
}

export default App
