import React from 'react';

const InfoCard = ({icon, title, bodyText}) => {
    return (
        <div style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
            <div className='card' style={{width: '100%', maxWidth: 268, padding: 24, borderRadius: 8}}>
                <img src={icon} style={{width: 32, marginBottom: 16}} alt={title}/>
                <div style={{fontFamily: 'arial', fontSize: 16, fontWeight: 700, fontStyle: 'normal', marginBottom: 16}}>{title}</div>
                <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal'}}>{bodyText}</div>
            </div>
        </div>
    );
}

export default InfoCard;