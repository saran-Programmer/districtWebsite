import styles from "./GirdDisplayer.module.css"

import img1 from "../../assets/siteImages/img1.jpg"
import img2 from "../../assets/siteImages/img2.jpg"
import img3 from "../../assets/siteImages/img3.jpg"
import img4 from "../../assets/siteImages/img4.jpg"
import img5 from "../../assets/siteImages/img5.jpg"
import img6 from "../../assets/siteImages/img6.jpg"

const GirdDisplayer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>Keezhadi Excavation</div>
            <div className={styles.imageDislayer}>
                <img src={img1} alt="" />
                <div className={styles.content}>In 2013-14, the Archaeological Survey of India (ASI) carried out explorations in 293 sites along the Vaigai river valley in Theni, Dindigul, Madurai, Sivaganga and Ramanathapuram districts. Keezhadi in Sivaganga district was chosen for excavation and artefacts unearthed by the ASI in the second phase of the excavation at Pallichanthai Thidal of Keezhadi pointed to an ancient civilisation that thrived on the banks of the Vaigai. Carbon dating of charcoal found at the Keezhadi site in February 2017 established that the settlement there belonged to 200 BC. The excavations thus proved that urban civilisation had existed in Tamil Nadu since the Sangam age.</div>
            </div>
            <div className={styles.imageDislayer}>
                <img src={img2} alt="" />
                <div className={styles.content}>A beautifully crafted earthen pot with leaf decoration was unearthed at Archaeological Survey of India’s excavation site at Keezhadi near here on Thursday, adding to a repository of evidence pointing to the existence of an urban habitation closer to the erstwhile capital of Pandya kingdom. The exquisitely crafted pot, measuring 72 cm in width and 42 cm in height, was found by an ASI team led by K. Amarnath Ramakrishna, Superintending Archaeologist.</div>
            </div>
            <div className={styles.imageDislayer}>
                <img src={img3} alt="" />
                <div className={styles.content}>“This is for the first time such a decorative pot has been found in a habitation site in Tamil Nadu during excavation,” says Mr. Amarnath. The storage pot contains pure river sand but its actual use could not be fixed immediately. Keezhadi Excavation water storage Two similar pots of different shapes have started to emerge in two other pits of the excavation site. The huge red pot, which is among a variety of earthenware discovered in the area, was found embedded alongside a water storage facility.</div>
            </div>
            <div className={styles.imageDislayer}>
                <img src={img4} alt="" />
                <div className={styles.content}>Noted epigraphist V. Vedachalam says that the kind of antiquities found at the site, ‘Pallichandai Thidal,’ reaffirm the belief that nestled among three ancient places — Konthagai, Keezhadi and Manalur — was an urban settlement that had trade links with North India and the western world during the Sangam Age. References to Manalur are found in Tiruvilayadalpuranam. During a later period, Konthagai and Keezhadi were merged as Kuntidevi Chaturvedimangalam and gifted to Brahmins.</div>
            </div>
            <div className={styles.imageDislayer}>
                <img src={img5} alt="" />
                <div className={styles.content}>Noted epigraphist V. Vedachalam says that the kind of antiquities found at the site, ‘Pallichandai Thidal,’ reaffirm the belief that nestled among three ancient places — Konthagai, Keezhadi and Manalur — was an urban settlement that had trade links with North India and the western world during the Sangam Age. References to Manalur are found in Tiruvilayadalpuranam. During a later period, Konthagai and Keezhadi were merged as Kuntidevi Chaturvedimangalam and gifted to Brahmins.</div>
            </div>
            <div className={styles.imageDislayer}>
                <img src={img6} alt="" />
                <div className={styles.content}>Noted epigraphist V. Vedachalam says that the kind of antiquities found at the site, ‘Pallichandai Thidal,’ reaffirm the belief that nestled among three ancient places — Konthagai, Keezhadi and Manalur — was an urban settlement that had trade links with North India and the western world during the Sangam Age. References to Manalur are found in Tiruvilayadalpuranam. During a later period, Konthagai and Keezhadi were merged as Kuntidevi Chaturvedimangalam and gifted to Brahmins.</div>
            </div>
        </div>
    )
}

export default GirdDisplayer