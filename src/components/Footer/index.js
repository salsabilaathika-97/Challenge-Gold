import React from "react";
import { binar_icon } from "../../asset";

const Footer = () => {
    const menuList = ["Our Services", "Why Us", "Testimonial", "FAQ"]
    const contactList = ["Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000", "binarcarrental@gmail.com", "081-233-334-808"]
    return (
        <>
            <footer class="text-center lg:text-left bg-white text-black">
                <div class="mx-6 py-10 text-center md:text-left">
                    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="font-bold">
                            
                                {
                                    contactList.map((item) => (
                                        <p class = "mb-4">
                                           {item}
                                        </p>
                                    ))
                                }
                        </div>
                        <div class="">
                                {
                                    menuList.map((item) => (
                                        <p class="mb-4">
                                        <a href="#!">{item}</a>
                                        </p>
                                    ))
                                }
                        </div>
                        <div class="">
                            <h6 class="font-bold mb-4 flex justify-center md:justify-start">
                                Connect With Us
                            </h6>
                        <div class="flex items-center justify-center md:justify-start mb-4">
                            <a href="#!" class="mr-6">
                                <svg class="h-6 w-6 text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#!" class="mr-6">
                                <svg class="h-6 w-6 text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#!" class="mr-6">
                                <svg class="h-6 w-6 text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="#!" class = "mr-6">
                                <svg class="h-6 w-6 text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                            <a href="#!" class="mr-6">
                                <svg class="h-6 w-6 text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
                                </svg>
                            </a>
                        </div>
                        </div>
                        <div class="">
                            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Copyright Binar 2022
                            </h6>
                        <div class="flex items-center justify-center md:justify-start mb-4">
                                <img src = {binar_icon} />
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
