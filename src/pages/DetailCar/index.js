import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { colors } from "../../utils";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from "react";
import { Button, Form } from "react-bootstrap";

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
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className='card d-flex flex-direction-row' style={{padding: 24, marginTop: -40, zIndex: 3}}>
                    <fieldset disabled>
                    <Form className='d-flex flex-direction-row'>
                    <Form.Group controlId="formNamaMobil" style={{marginRight: 16}}>
                        <Form.Label>Nama Mobil</Form.Label>
                        <Form.Control type="text" placeholder="Ketik nama/tipe mobil" style={{width: 208}}/>
                    </Form.Group>
                    <Form.Group controlId="formKategori" style={{marginRight: 16}}>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select style={{width: 208}}>
                        <option value='' hidden>Masukkan Jenis</option>
                        <option value="1">2 - 4 Orang</option>
                        <option value="2">4 - 6 Orang</option>
                        <option value="3">6 - 8 Orang</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formHarga" style={{marginRight: 16}}>
                        <Form.Label>Harga</Form.Label>
                        <Form.Select style={{width: 220}}>
                        <option value='' hidden>Masukkan Harga Sewa Per Hari</option>
                        <option value="1">{"< Rp. 400.000"}</option>
                        <option value="2">{"Rp. 400.000 - Rp. 600.000"}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formStatus" style={{marginRight: 16}}>
                        <Form.Label>Status</Form.Label>
                        <Form.Select style={{width: 220}}>
                        <option value="1">{"Disewa"}</option>
                        <option value="2">{"Belum Disewa"}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex align-items-end'>
                        <Button as="input" type="button" value="Cari Mobil" variant="success" />
                    </Form.Group>
                    </Form>
                    </fieldset>
                </div>
                </div>
                {
                !!Object.keys(car).length && (
                    
                        <div>
                            <img src = {car.image} />
                           <p>{car.name}</p>
                           <p>{car.price}</p>
                        </div>
                   
                )
            }
            <Footer />
        </div>
    )
}

export default DetailCar;
