import AboutDistrict from "./components/AboutDistrict/AboutDistrict"
import GirdDisplayer from "./components/DisplayGird/GirdDisplayer"
import ImageDisplayer from "./components/ImageDisplayer/ImageDisplayer"
import TopMenu from "./components/menu/TopMenu"
import Footer from "./components/Footer/Footer"

const App = () => {
    return(
        <div>
            <TopMenu />
            <ImageDisplayer />
            <AboutDistrict />
            <GirdDisplayer />
            <Footer />
        </div>
    )
}

export default App