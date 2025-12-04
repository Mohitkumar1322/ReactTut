

import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';





function App() {
  const [calVal, setCalval] = useState("");

  const onButtonClick = (buttonClicker) => {
    if(buttonText === 'C'){

    }else if(buttonText === '='){

    }else{
      const newDisplayValue=calVal + buttonText;
      setCalval(newDisplayValue);
    }
  
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App
