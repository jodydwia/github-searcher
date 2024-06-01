import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <section className={styles.header}>
                <div className={styles.logoWrapper}>
                    <img src="github-logo.png" className={styles.logoImg} alt="github"/>
                </div>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Github Searcher</h1>
                    <h4 className={styles.subtitle}>Search users or repositories below</h4>
                </div>
            </section>
        </>
    )
}
