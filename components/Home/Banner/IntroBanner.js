import React from "react";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerItem from "./BannerItem";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr: false});
const IntroBanner = ({banners, width}) => {
    return (
        <OwlCarousel
            className='intro-slider owl-carousel owl-theme owl-nav-inside row cols-1'
            loop={false}
            margin={0}
            dots={false}
            nav={false}
            autoplay={true}
            autoplayTimeout={10000}
            responsive={{
                0: {items: 1},
                480: {items: 1},
                576: {items: 1},
                768: {items: 1},
                992: {items: 1},
                1200: {items: 1},
            }}
        >
            {banners?.length > 0 && banners.map((banner, index) =>
                <BannerItem banner={banner} key={index} />
            )}

        </OwlCarousel>
    )
}
export default IntroBanner