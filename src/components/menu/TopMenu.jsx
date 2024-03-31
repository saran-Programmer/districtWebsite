import styles from "./TopMenu.module.css"

const TopMenu = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                Sivaganga
            </div>
            <div className={styles.item}>
                <div>Home</div>
                <div>About District</div>
                <div>Departments</div>
                <div>Directories</div>
                <div>Tourism</div>
            </div>
        </div>
    )
}

export default TopMenu