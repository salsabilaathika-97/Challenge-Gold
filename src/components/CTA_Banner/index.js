import { Button } from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";

const CTA_Banner = () => {
    return (
        <>
            <div class = "flex justify-center w-full h-auto bg-[#0D28A6] pt-8 pb-8">
                <div class = "py-9 w-1/2">
                    <h1 class = "font-bold text-white text-3xl text-center p-2">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p class = "font-bold text-white text-sm text-center p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div class = "px-6 py-8 text-center">
                        <Link to = {"/carimobil"}>
                            <Button variant="success" >Mulai Sewa Mobil</Button>
                        </Link>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default CTA_Banner;
