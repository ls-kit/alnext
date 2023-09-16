import _ from "lodash";
import React from "react";
import {getSetting, loadAsset} from "../../../utils/Helper";
import dynamic from "next/dynamic";
import Link from "next/link";
import LazyImage from "../../common/LazyImage";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr: false});

const BannerRight = ({ general, auth }) => {
    const currency_icon = getSetting(general, "currency_icon");
    const site_name = getSetting(general, "site_name");

    let content;
    const offerData = ["one", "two", "three", "four", "five", "six"];
    if (offerData)
        content = (
            <div
                className='mt-4 exOffBox'
                style={{
                    backgroundImage: `url(${loadAsset(getSetting(general, "hp_card_five_image"))})`,
                    height: "100%",
                }}
            >
                <div>
                    <p className='t-white'>Exclusive Offers</p>
                    <h6 className='bold t-white'>{getSetting(general, "hp_card_five_text")}</h6>
                </div>
                <div className='row'>
                    <OwlCarousel
                        className='owl-carousel owl-theme owl-nav-inside row cols-3'
                        loop={true}
                        margin={10}
                        dots={false}
                        nav={false}
                        autoplay={true}
                        autoplayTimeout={3000}
                        responsiveclassName={true}
                        responsive={{
                            0: {
                                items: 1,
                                nav: true,
                            },
                            600: {
                                items: 4,
                                nav: false,
                            },
                            1000: {
                                items: 2,
                                nav: true,
                                loop: false,
                            },
                        }}
                    >
                        {offerData.map((product, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`/product/${getSetting(general, `hp_card_five_product_${product}_id`)}`}>
                                        <div className='position-relative'>
                                            <LazyImage
                                                imageSrc={`${getSetting(general, `hp_card_five_product_${product}_image`)}`}
                                                imageAlt=''
                                            />
                                            <div className='flexCenter exPriceBox'>
                                                <span className='bt'>
                                                  {`${currency_icon}`}{" "}
                                                    {_.round(getSetting(general, `hp_card_five_product_${product}_price`))}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </div>
        );

    return (
        <div className='bRightBox flex flexCol h-100 proTop' style={{ backgroundImage: `url('assets/images/icon/proTop.png_.webp')` }}>
            <div className=''>
                <div className='fCenter flexCol'>
                    <img className='proImg' src={'assets/images/icon/profile.webp'} alt='' />
                    <h6 className='bold '>Welcome to {site_name}!</h6>
                </div>
                {auth.isAuthenticated ? (
                    ""
                ) : (
                    <div className='flexBetween' style={{ paddingTop: "10px" }}>
                        <div>
                            <Link href='/signup'>
                                <span className='homeLogin-btn'>Register</span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/login'>
                                <span className='homeReg-btn'>Sign in</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {content}
        </div>
    );
};

export default BannerRight;
