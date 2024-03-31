import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.author}>This webpage is created by saran G</div>
            <div className={styles.content}>© Content Owned And Maintained By Sivaganga District Administration , Developed And Hosted By National Informatics Centre,
            Ministry Of Electronics & Information Technology, Government Of India</div>
            <img src={logo} alt="" className={styles.logo}/>
        </div>
    )
}

export default Footer