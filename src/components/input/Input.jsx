import styles from "./Input.module.css"

export default function Input({value, setValue}) {
    return <input  onChange={setValue} type="text" value={value} className={styles.input} placeholder={"Typing to search users or repositories..."}/>
}
