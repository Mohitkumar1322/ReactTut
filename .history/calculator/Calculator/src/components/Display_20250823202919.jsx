
import styles from './Display.module.css';
const Display=(displayVal)=>{
    return (
        <input type="text" className={styles.display} disabled />
    )
}

export default Display;