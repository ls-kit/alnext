import React from "react";
import BrowseCategories from "../components/Home/includes/BrowseCategories";
import FeaturedCategories from "../components/Home/Featured/FeaturedCategories";
import IntroBanner from "../components/Home/Banner/IntroBanner";
import {getSetting, useWindowSize} from "../utils/Helper";
import {useEffect, useState} from "react";
import {loadBanners, loadGeneral} from "../store/actions/InitAction";
import {useDispatch, useSelector} from "react-redux";
import BannerSkeleton from "../skeleton/BannerSkeleton";
import LargeCardSkelton from "../skeleton/productSkeleton/LargeCardSkelton";
import {getDiscountProduct} from "../utils/Services";
import _ from "lodash";
import Link from "next/link";
import LazyImage from "../components/common/LazyImage";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerRight from "../components/Home/Banner/BannerRight";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {ssr: false});

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [discountLoading, setDiscountLoading] = useState(true);
    const general = useSelector((state => state.INIT.general));
    const currency_icon = getSetting(general, "currency_icon");
    const [products, setProducts] = useState([]);
    const banners = useSelector((state) => state.INIT.banners);
    const auth = useSelector((state => state.auth))
    let [width] = useWindowSize();

    if (typeof window !== 'undefined') {
        width = width ? width : window.innerWidth;
    }

    let homePageContent = null;
    if (discountLoading) {
        homePageContent = <LargeCardSkelton />;
    }
    if (!discountLoading && products.length > 0) {
        homePageContent = (
            <OwlCarousel
                className="owl-carousel owl-theme owl-nav-inside row cols-3"
                loop={true}
                margin={10}
                dots={false}
                nav={false}
                autoplay={true}
                autoplayTimeout={3000}
                responsiveclassname={'true'}
                responsive={{
                    0: {
                        items: 1,
                        loop: false,
                    },
                    600: {
                        items: 4,
                    },
                    1000: {
                        items: 4,
                        loop: true,
                    },
                }}
            >
                {products.map((product, index) => {
                    const product_code = product.product_code
                        ? product.product_code
                        : product.ItemId;
                    return (
                        <div key={index}>
                            <Link className="homeComp" href={`/product/${product_code}`}>
                                <LazyImage classes="" imageSrc={product.img} imageAlt="" />
                                <button className="homeLogin-btn">
                                    {" "}
                                    {`${currency_icon}`} {` `}
                                    {_.round(product?.discount_price)}
                                </button>
                                <h6 className="dOprice">
                                    {`${currency_icon}`} {` `}
                                    {_.round(product?.original_price)}
                                </h6>
                            </Link>
                        </div>
                    );
                })}
            </OwlCarousel>
        );
    }
    useEffect(() => {
        if (!loading) {
            dispatch(loadBanners()); // Set loading to true before dispatching the action
            dispatch(loadGeneral());
        }
        setLoading(false)
        if (_.isEmpty(products)) {
            getDiscountProduct().then((response) => {
                if (!_.isEmpty(response)) {
                    const products = response.SuperDealProducts;
                    if (!_.isEmpty(products)) {
                        setProducts(products);
                    }
                }
                setDiscountLoading(false);
            });
        }
    }, []);
    return (
        <main className='main' style={{backgroundColor: "#F2F2F2"}}>
            <div className="intro-section">
                <div className="container mt-0 mt-md-1">
                    <div className="row">
                        <div className="col-lg-3 cols d-none d-lg-block mb-1 pr-0 ">
                            <BrowseCategories/>
                        </div>
                        <div className="col-lg-6 cols col-md-12 col-12 mb-1 pr-0">
                            <div className="h-100 intro-center">
                                {width >= 768 ? (
                                    <div className="intro-slider-container br-8">
                                        {banners?.banners && !loading ? (
                                            <IntroBanner banners={banners?.banners} width={width}/>
                                        ) : (
                                            <BannerSkeleton/>
                                        )}
                                    </div>
                                ) : (
                                    <div className="intro-slider-container br-8">
                                        {banners?.mobileBanners && !loading ? (
                                            <IntroBanner
                                                banners={banners.mobileBanners}
                                                width={width}
                                            />
                                        ) : (
                                            <BannerSkeleton/>
                                        )}
                                    </div>
                                )}

                                <div className="banner-bottom-part br-8">
                                    <div
                                        className="row"
                                        style={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className="col-12">
                                            <div className="h-100">
                                                <div className="row align-items-center">
                                                    <div className="col-md-3 fCenter">
                                                        <div className="">
                                                            <h3 className="bold fs-18">
                                                                Your fave shopping guide
                                                            </h3>
                                                            <p
                                                                className="bold"
                                                                style={{ lineHeight: "normal", fontSize: "12px" }}
                                                            >
                                                                Checkout the latest new Deals
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="">{homePageContent}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 cols d-none d-lg-block mb-1 pr-0 ">
                            <BannerRight general={general} auth={auth} />
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedCategories/>
        </main>
    )
}

export default Home