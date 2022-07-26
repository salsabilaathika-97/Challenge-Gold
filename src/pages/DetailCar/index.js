import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { colors } from "../../utils";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from "react";

const DetailCar = () => {
    const [car, setCar] = useState([]);
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        axios
          .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
          .then((res) => setCar(res.data))
          .catch((err) => console.log(err));
      }, []);

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
            {
                !!Object.keys(car).length && (
                    
                        <div>
                            <img src = {car.image} />
                           <p>{car.name}</p>
                           <p>{car.price}</p>
                        </div>
                   
                )
            }
            </div>
            <Footer />
        </div>
    )
}

export default DetailCar;
