import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckItem from '../../components/CheckItem';
import { img_car, ILWoman } from "../../asset";
import { colors } from "../../utils";
import { Button } from 'react-bootstrap';

const Home = () => {
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
                <div className='row' style={{margin: 'auto'}}>
                    <div className='col-md-6' style={{display: 'flex', padding: 16, alignItems: 'center', justifyContent: 'end'}}>
                        <div style={{maxWidth: 568}}>
                            <div style={{fontFamily: 'arial', fontSize: 36, fontWeight: 700, fontStyle: 'normal'}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
                            <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16}} >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                            <Button variant="success" style={{marginTop: 16}} >Mulai Sewa Mobil</Button>
                        </div>
                    </div>
                    <div className='col-md-6' style={{display: 'flex', paddingLeft: 16, paddingRight: 0, position: 'relative'}}>
                        <div style={{backgroundColor: colors.bgCarMain, width: '100%', height: '50%', alignSelf: 'end', borderTopLeftRadius: 60, position: 'absolute', zIndex: 1}}>
                        </div>
                        <img src={img_car} style={{width: '100%', position: 'relative', justifyContent: 'end', zIndex: 2}} alt='mobil mercedes' />
                    </div>
                </div>
            </div>
            <div style = {styles.container02}>
            <div className='row'>
                <div className='col-md-6' style={{display: 'flex', padding: 54, alignItems: 'center', justifyContent: 'end'}}>
                    <img src={ILWoman} style={{width: '100%', maxWidth: 459, maxHeight: 428}} alt='Woman service' />
                </div>
                <div className='col-md-6' style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                    <div style={{margin: 16, maxWidth: 468}}>
                        <div style={{fontFamily: 'arial', fontSize: 24, fontWeight: 700, fontStyle: 'normal'}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</div>
                        <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 24}} >Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</div>
                        <CheckItem text={'Sewa Mobil Dengan Supir di Bali 12 Jam'} />
                        <CheckItem text={'Sewa Mobil Lepas Kunci di Bali 24 Jam'} />
                        <CheckItem text={'Sewa Mobil Jangka Panjang Bulanan'} />
                        <CheckItem text={'Gratis Antar - Jemput Mobil di Bandara'} />
                        <CheckItem text={'Layanan Airport Transfer / Drop In Out'} />
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
