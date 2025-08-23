
import styles from './Display.module.css';
const Display=(displayVal)=>{
    return (
        console.log(displayVal),
        <input type="text" className={styles.display} value={displayVal} />
    )
}

export default Display;