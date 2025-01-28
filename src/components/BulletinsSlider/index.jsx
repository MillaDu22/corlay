
import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./bulletinsSlider.css";

import Cr100 from '../../assets/images/Bulletins/100.webp';
import Cr101 from '../../assets/images/Bulletins/101.webp';
import Cr102 from '../../assets/images/Bulletins/102.webp';
import Cr103 from '../../assets/images/Bulletins/103.webp';
import Cr104 from '../../assets/images/Bulletins/104.webp';
import Cr105 from '../../assets/images/Bulletins/105.webp';
import Cr106 from '../../assets/images/Bulletins/106.webp';
import Cr107 from '../../assets/images/Bulletins/107.webp';
import Cr108 from '../../assets/images/Bulletins/108.webp';
import Cr109 from '../../assets/images/Bulletins/109.webp';
import Cr110 from '../../assets/images/Bulletins/110.webp';
import Cr111 from '../../assets/images/Bulletins/111.webp';
import Cr112 from '../../assets/images/Bulletins/112.webp';
import Cr113 from '../../assets/images/Bulletins/113.webp';

const BulletinsSlider = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update(); // Force Swiper à recalculer
        }
    }, []);

    const bulletins = [
        { number: "113", date: "Août 2024", image: Cr113, link: "https://www.calameo.com/read/0058652781b249e03e50d", alt:"bulletin 113 de Août 2024" },
        { number: "112", date: "Janvier 2024", image: Cr112, link: "https://www.calameo.com/read/005865278f526f99d401a", alt:"bulletin 112 de Janvier 2024" },
        { number: "111", date: "Août 2023", image: Cr111, link: "https://www.calameo.com/read/0058652789eeef2d90017", alt:"bulletin 111 de Août 2023" },
        { number: "110", date: "Mars 2023", image: Cr110, link: "https://www.calameo.com/read/00586527885b39c275c08", alt:"bulletin 110 de Mars 2023" },
        { number: "109", date: "Décembre 2022", image: Cr109, link: "https://www.calameo.com/read/00586527807850588ba11", alt:"bulletin 109 de Décembre 2022" },
        { number: "108", date: "Septembre 2022", image: Cr108, link: "https://www.calameo.com/read/0058652780fde3beccfb6", alt:"bulletin 108 de Septembre 2022" },
        { number: "107", date: "Avril 2022", image: Cr107, link: "https://www.calameo.com/read/0058652787c25b1693825", alt:"bulletin 107 de Avril 2022" },
        { number: "106", date: "Janvier 2022", image: Cr106, link: "https://www.calameo.com/read/00586527880a2cffb8768", alt:"bulletin 106 de Janvier 2022" },
        { number: "105", date: "Novembre 2021", image: Cr105, link: "https://www.calameo.com/read/005865278751d723a3a16", alt:"bulletin 105 de Novembre 2021" },
        { number: "104", date: "Mai 2021", image: Cr104, link: "https://www.calameo.com/read/0058652786f6e70ba8d00", alt:"bulletin 104 de Mai 2021" },
        { number: "103", date: "Janvier 2021", image: Cr103, link: "https://www.calameo.com/read/0058652784c79c88e33d3", alt:"bulletin 103 de Janvier 2021" },
        { number: "102", date: "Septembre 2020", image: Cr102, link: "https://www.calameo.com/books/005865278b05d4d6513b6", alt:"bulletin 102 de Septembre 2020" },
        { number: "101", date: "Décembre 2019", image: Cr101, link: "https://www.calameo.com/read/0058652788186459f4c63", alt:"bulletin 101 de Décembre 2019" },
        { number: "100", date: "Juin 2019", image: Cr100, link: "https://www.calameo.com/read/0058652780772ca48580e", alt:"bulletin 100 de Juin 2019" },
    ];

    return (
        <section className="bulletins-slider">
            <h2 className="title2">
                <i className="fa-solid fa-people-arrows"></i> Le kiosque
            </h2>
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            resizeObserver={true}
            loop={true}
            autoplay={{
                delay: 3000, // 3 secondes entre les slides
                disableOnInteraction: false, // Permet la navigation manuelle sans arrêter l'autoplay
            }}
            
            breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="swiper-container"
        >
            {bulletins.map((bulletin) => (
            <SwiperSlide key={bulletin.number} className="swiper-slide" data-swiper-autoplay="3000">
                <div className="slide-content">
                <img src={bulletin.image} alt={`Bulletin ${bulletin.alt}`} className="cover" />
                <a href={bulletin.link} target="_blank" rel="noopener noreferrer" className="link-bulletin">
                    <p className="adress-mairie">{`N° ${bulletin.number}`}</p>
                    <p className="adress-mairie">{bulletin.date}</p>
                    <i className="fa-solid fa-eye"></i>
                </a>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </section>
    );
};

export default BulletinsSlider;
