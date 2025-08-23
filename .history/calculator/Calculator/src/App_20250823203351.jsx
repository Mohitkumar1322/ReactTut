

import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';





function App() {

  let [calVal,setCalval] = useState("34");

  return (
   <div className={styles.calculator}>
    <Display displayVal={calVal}></Display>
    <ButtonsContainer />
   </div>
  )
}

export default App
