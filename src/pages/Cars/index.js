import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { colors } from "../../utils";
import { img_car } from "../../asset";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import CarList from "../../components/CarList/CarList";

const Cars = () => {
    const [data, setData] = useState([]);
    const [fdata, setFdata] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        axios
          .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, []);

    const handleChangeName = (e) => {
        setName(e.target.value)
        if (!e.target.value.length){
            setFdata([])
            setNotFound(false);
        }
    }

    const handleSearch = () => {
        const newArr = data.filter(e => (e.name === name))
        if(!newArr.length){
            setNotFound(true);
        }
        setFdata(newArr);
    }  

    console.log("data data", data);
    console.log("data fdata", fdata);

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
            <Navigation />
            <div style={styles.container01}>
                <div className='row' style={{margin: 'auto'}}>
                    <div className='col-md-6' style={{display: 'flex', padding: 16, alignItems: 'center', justifyContent: 'end'}}>
                        <div style={{maxWidth: 568}}>
                            <div style={{fontFamily: 'arial', fontSize: 36, fontWeight: 700, fontStyle: 'normal'}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
                            <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16}} >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                        </div>
                    </div>
                    <div className='col-md-6' style={{display: 'flex', paddingLeft: 16, paddingRight: 0, position: 'relative'}}>
                        <div style={{backgroundColor: colors.bgCarMain, width: '100%', height: '50%', alignSelf: 'end', borderTopLeftRadius: 60, position: 'absolute', zIndex: 1}}>
                        </div>
                        <img src={img_car} style={{width: '100%', position: 'relative', justifyContent: 'end', zIndex: 2}} alt='mobil mercedes' />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className='card d-flex flex-direction-row' style={{padding: 24, marginTop: -40, zIndex: 3}}>
                    <Form className='d-flex flex-direction-row'>
                    <Form.Group controlId="formNamaMobil" style={{marginRight: 16}}>
                        <Form.Label>Nama Mobil</Form.Label>
                        <Form.Control type="text" placeholder="Ketik nama/tipe mobil" style={{width: 208}}  onChange={(e) => handleChangeName(e)} />
                    </Form.Group>
                    <Form.Group controlId="formKategori" style={{marginRight: 16}}>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select style={{width: 208}} disabled>
                        <option value='' hidden>Masukkan Jenis</option>
                        <option value="1">2 - 4 Orang</option>
                        <option value="2">4 - 6 Orang</option>
                        <option value="3">6 - 8 Orang</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formHarga" style={{marginRight: 16}}>
                        <Form.Label>Harga</Form.Label>
                        <Form.Select style={{width: 220}} disabled>
                        <option value='' hidden>Masukkan Harga Sewa Per Hari</option>
                        <option value="1">{"< Rp. 400.000"}</option>
                        <option value="2">{"Rp. 400.000 - Rp. 600.000"}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formStatus" style={{marginRight: 16}}>
                        <Form.Label>Status</Form.Label>
                        <Form.Select style={{width: 220}} disabled>
                        <option value="1">{"True"}</option>
                        <option value="2">{"False"}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex align-items-end'>
                        <Button as="input" type="button" value="Cari Mobil" variant="success" onClick={handleSearch} />
                    </Form.Group>
                    </Form>
                </div>
                </div>
                <div style = {styles.container02}>
                <div className='row' style = {{ padding: 10 }}>
                    <div className='col' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40}}>
                        {!!notFound && <h1 style = {{ color: "red" }}>Data tidak ditemukan</h1>}
                        <CarList data = {!fdata.length ? data : fdata} />
                    </div>
                </div>
                </div>
            <Footer />
        </div>
    )
}

export default Cars;
