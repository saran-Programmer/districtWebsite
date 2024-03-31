import styles from "./ImageDisplayer.module.css"
import image1 from "../../assets/DistrictImages/building.jpg"
import image2 from "../../assets/DistrictImages/church.jpg"
import image3 from "../../assets/DistrictImages/download.jpg"
import image4 from "../../assets/DistrictImages/cloudBuilding.jpg"
import { useRef } from "react"

const ImageDisplayer = () => {

    const images = [image1, image2, image3, image4, image1, image2, image3, image4]
    const scrollable = useRef(null)

    const handleLeftClick = () => {
        scrollable.current.scrollLeft -= 400
    }

    const handleRightClick = () => {
        scrollable.current.scrollLeft += 400
    }

    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <button onClick={handleLeftClick}><i class="fa-solid fa-arrow-left" /></button>
                <button onClick={handleRightClick}><i class="fa-solid fa-arrow-right" /></button>
            </div>
            <div className={styles.scrollableContainer} ref={scrollable}>
                {
                    images.map(e => (
                        <img src={e} alt="District Image" />
                    ))
                }
            </div>
        </div>
    )
}

export default ImageDisplayer