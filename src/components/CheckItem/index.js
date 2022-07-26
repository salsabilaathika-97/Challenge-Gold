import React from 'react';
import { IconCheck } from '../../asset';

const CheckItem = ({text}) => {
    return (
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start'}}>
            <img src={IconCheck} style={{paddingRight: 16, height: 24}} alt='Check Icon' />
            <div style={{fontFamily: 'arial', fontSize: 14, fontWeight: 700, fontStyle: 'normal', width: '100%', wordWrap: 'break-word'}}>
                {text}
            </div>
        </div>
    );
}

export default CheckItem;
