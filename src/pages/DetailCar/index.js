import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { colors } from "../../utils";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from "react";
import { Button, Form } from "react-bootstrap";
import { includeList, excludeList } from "../../const/StaticData";
import CheckItem from "../../components/CheckItem";

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
        },
        container02 : {
            backgroundColor: colors.bgMainPage02,
            height: 'auto',
            overflowX: 'hidden'
        },
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
                <div style = {styles.container02}>
                    <div className = 'row'>
                        <div className='col-md-6' style={{display: 'flex', padding: 54, alignItems: 'center', justifyContent: 'end'}}>
                            <div style={{ maxWidth: 468}}>
                                <div style = {{ fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal' }}>Tentang Paket</div>
                                <div style = {{ fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16 }}>Include</div>
                               {
                                includeList.map((item) => (
                                    <CheckItem text = {item} />
                                ) )
                               }
                               <div style = {{ fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16 }}>Exclude</div>
                               {
                                excludeList.map((item) => (
                                    <CheckItem text = {item} />
                                ) )
                               }
                              <div style = {{ fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16 }}>Refund, Reschedule, Overtime</div>
                              {
                                excludeList.map((item) => (
                                    <CheckItem text = {item} />
                                ) )
                               }
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {
                                !!Object.keys(car).length && (
                                    
                                    <div style = {{ padding: 10 }}>
                                    <div class="card" style={{ width: 250 }}>
                                        <img src ={car.image} alt = "item-image" />
                                        <div class = "card-body">
                                            <h5 class = "card-title">{car.name}</h5>
                                            <p class = "card-text">Total = Rp.{car.price}</p>
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default DetailCar;
