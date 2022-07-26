import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { colors } from "../../utils";

const DetailCar = () => {
    const styles = {
        container01 : {
            backgroundColor: colors.bgMainPage01,
            height: 'auto',
            overflowX: 'hidden',
            paddingTop: 97
        }
    };

    return (
        <div>
            <Navbar />
            <div style={styles.container01}>
                
                
            </div>
            <Footer />
        </div>
    )
}

export default DetailCar;
