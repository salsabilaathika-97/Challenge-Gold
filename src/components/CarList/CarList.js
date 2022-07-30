import { Link } from "react-router-dom";

const CarList = (props) => {
    return (
        <>
        {
                            !!props.data.length && (
                                props.data.map(item => (
                                    <div style = {{ padding: 10 }}>
                                    {/* <div class="card" style={{ width: 250, height: 300 }}>
                                        <img src ={item.image} alt = "item-image" />
                                        <div class = "card-body">
                                            <h5 class = "card-title">{item.name}</h5>
                                            <p class = "card-text">{item.category}</p>
                                            <p class = "card-text">{item.price}</p>
                                            <Link to = {`/detailmobil/${item.id}`}>
                                                <Button variant = "success">Pilih Mobil</Button>
                                            </Link>
                                        </div>
                                    </div> */}
                                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img class="rounded-t-lg" src={item.image} alt=""/>
                                        </a>
                                        <div class="p-5">
                                            <p>
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            </p>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.category}</p>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.price}</p>
                                            <Link to = {`/detailmobil/${item.id}`}>
                                            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none">
                                                Pilih Mobil
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                ))
                            )
                        }
        </>
    )
}

export default CarList;