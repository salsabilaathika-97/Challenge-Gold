import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckItem from '../../components/CheckItem';
import InfoCard from '../../components/InfoCard';
import { img_car, ILWoman } from "../../asset";
import { colors } from "../../utils";
import { Button } from 'react-bootstrap';
import { CheckItemList, InfoCardList } from '../../const/StaticData';
import CTA_Banner from '../../components/CTA_Banner';
import Accordion from '../../components/Accordion';

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
                        {
                            CheckItemList.map((item) => (
                                <CheckItem text = {item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12' style={{display: 'flex', alignItems: 'start', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection:'column'}}>
                        <div style={{paddingRight: 16, paddingLeft: 16}}>
                            <div style={{fontFamily: 'arial', fontSize: 24, fontWeight: 700, fontStyle: 'normal'}}>Why Us ?</div>
                            <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16}}>Mengapa harus pilih Binar Car Rental ?</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40}}>
                            {
                                InfoCardList.map((item) => (
                                    <InfoCard icon = {item.icon} title = {item.title} bodyText = {item.bodytext} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <CTA_Banner />
            </div>
            <div className='row'>
                <div className='col-sm-5' style={{display: 'flex', padding: 54, alignItems: 'center', justifyContent: 'end'}}>
                    <div style={{ maxWidth: 468}}>
                        <div style = {{ fontFamily: 'arial', fontSize: 24, fontWeight: 700, fontStyle: 'normal' }}>Frequently Asked Questions</div>
                        <div style = {{ fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', marginTop: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                </div>
                <div className='col-sm-5' style={{display: 'flex', padding: 54, alignItems: 'center', justifyContent: 'end'}}>
                    <Accordion />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
