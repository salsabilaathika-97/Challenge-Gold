import React from 'react'
import { ImagePhoto1, Star } from '../../asset'
import { colors } from "../../utils";

const CardTesti = () => {

    return (
        <>
            <div className="card" style={{padding: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' , backgroundColor: colors.bgMainPage01}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src={ImagePhoto1} style={{height: 80, width: 80, borderRadius: 40, marginRight: 46}} alt="Foto card orang" />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', maxWidth: 415}}>
                    <div style={{marginBottom: 10, display: 'flex', flexDirection: 'row'}}> 
                        <img src={Star} style={{height: 16, width: 16}} alt="Star" />
                        <img src={Star} style={{height: 16, width: 16}} alt="Star" />
                        <img src={Star} style={{height: 16, width: 16}} alt="Star" />
                        <img src={Star} style={{height: 16, width: 16}} alt="Star" />
                        <img src={Star} style={{height: 16, width: 16}} alt="Star" />
                    </div>
                    <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal'}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
                    <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 400, fontStyle: 'normal', marginTop: 10}}>John Dee 32, Bromo</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CardTesti;