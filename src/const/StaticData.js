import { IconComplete, IconPrice, Icon24, IconProfessional } from "../asset";

const CheckItemList = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam', 
    'Sewa Mobil Lepas Kunci di Bali 24 Jam', 
    'Sewa Mobil Jangka Panjang Bulanan', 
    'Gratis Antar - Jemput Mobil di Bandara', 
    'Layanan Airport Transfer / Drop In Out'];

const InfoCardList = [
    {
        "icon" : IconComplete,
        "title" : "Mobil Lengkap",
        "bodytext" : "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    }, {
        "icon" : IconPrice,
        "title" : "Harga Murah",
        "bodytext" : "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
        "icon" : Icon24,
        "title" : "Layanan 24 jam",
        "bodytext" : "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
    },
    {
        "icon" : IconProfessional,
        "title" : "Sopir Profesional",
        "bodytext" : "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    }
]

const HeaderList = [
    {
        "id": "0",
        "header": 'Apa saja syarat yang dibutuhkan?'}, 
    {
        "id": "1",
        "header":'Berapa hari minimal sewa mobil lepas kunci?'},
    {     
        "id" : "2",
        "header":'Berapa hari sebelumnya sebaiknya booking sewa mobil?'}, 
    {    
        "id" : "3",
        "header":'Apakah ada biaya antar jemput?'}, 
    {
        "id" : "4",    
        "header":'Bagaimana jika terjadi kecelakaan?'}]

const contactList = [
    "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000", 
    "binarcarrental@gmail.com", 
    "081-233-334-808"]

const navList = [
    {
        "id" : "#our-service",
        "text" : "Our Services"
    },
    {
        "id" : "#why-us",
        "text" : "Why Us"
    },
    {
        "id" : "#testimonial",
        "text" : "Testimonial"
    },
    {
        "id" : "#faq",
        "text" : "FAQ"
    }
]

const includeList = [
    "Apa saja yang termasuk dalam paket misal durasi max 12 jam", 
    "Sudah termasuk bensin selama 12 jam", 
    "Sudah termasuk tiket wisata", 
    "Sudah termasuk pajak"
]

const excludeList = [
    "Tidak termasuk biaya makan sopir Rp. 75.000 / hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000 / jam",
    "Tidak termasuk akomodasi penginapan"
]

export {CheckItemList, InfoCardList, HeaderList, contactList, navList, includeList, excludeList}
