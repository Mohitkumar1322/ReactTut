
import styles from './Display.module.css';
const Display=(displayVal)=>{
    return (
        <input type="text" className={styles.display} value={display} />
    )
}

export default Display;