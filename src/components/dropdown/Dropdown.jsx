import styles from "./Dropdown.module.css";

export default function Dropdown({options, type, setType}) {
    return (
        <select value={type} onChange={setType} name="dropdown" id="dropdown" className={styles.dropdown}>
            {options && options.map(o=>(<option key={o.key} value={o.value}>{o.name}</option>))}
        </select>
    )
}
