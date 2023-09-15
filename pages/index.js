import BrowseCategories from "../components/Home/includes/BrowseCategories";
import FeaturedCategories from "../components/Home/Featured/FeaturedCategories";
import IntroBanner from "../components/Home/Banner/IntroBanner";
import {useWindowSize} from "../utils/Helper";
import {useEffect, useState} from "react";
import {loadBanners} from "../store/actions/InitAction";
import {useDispatch, useSelector} from "react-redux";
import BannerSkeleton from "../skeleton/BannerSkeleton";

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const banners = useSelector((state) => state.INIT.banners);
    let [width] = useWindowSize();
    if (typeof window !== 'undefined') {
        width = width ? width : window.innerWidth;
    }

    useEffect(() => {
        if (!loading) {
            dispatch(loadBanners()); // Set loading to true before dispatching the action
        }
        setLoading(false)
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
                                        {/* {banners.banners && !loading ? (
                                            <IntroBanner banners={banners.banners} width={width} />
                                            ) : (
                                            <BannerSkeleton />
                                        )} */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FeaturedCategories/>

        </main>
    )
}

export default Home