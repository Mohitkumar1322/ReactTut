

import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';





function App() {
  const [calVal, setCalval] = useState("");

  const onButtonClick = (buttons) => {
    console.log("Button Clicked");
    setCalval("45"); // ✅ string or number
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App
