

import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import 





function App() {

  let calVal = useState("");

  return (
   <div className={styles.calculator}>
    <Display />
    <ButtonsContainer />
   </div>
  )
}

export default App
