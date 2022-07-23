import "./style.css"
import { img_car } from "../../asset";

const Banner = () => {
    return (
        <div className="banner-body">
            <div className="banner-text">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button>Mulai Sewa Mobil</button>
            </div>
            <div className = "banner-image">
                <img src = {img_car} />
            </div>
        </div>
    )
}

export default Banner;
