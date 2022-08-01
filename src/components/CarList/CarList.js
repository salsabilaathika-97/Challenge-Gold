import { Link } from "react-router-dom";

const CarList = (props) => {
    const formatCurrency = (number) => {
        let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return "Rp. "+fNumber;
    }
    return (
        <>
            {
                !!props.data.length && (
                    props.data.map(item => (
                        <div style={{ padding: 10 }}>
                            <div className="card" style={{padding: 25}}>
                                <img className="rounded-t-lg" src={item.image} style={{maxHeight: 160, maxWidth: 270}} alt="Gambar Mobil" />
                                <div className="tracking-tight text-gray-900 dark:text-white" style={{marginTop: 16}}>{item.name}</div>
                                <div style={{fontFamily: 'arial', fontSize: 16, fontWeight: 700, fontStyle: 'normal', marginBottom: 8}}>{formatCurrency(item.price) + " / hari"}</div>
                                <Link to={`/detailmobil/${item.id}`}>
                                    <div className="inline-flex justify-content-center py-2 px-3 text-sm font-bold text-center text-white bg-green-500 w-100 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none">
                                        Pilih Mobil
                                    </div >
                                </Link>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default CarList;