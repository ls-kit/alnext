import Link from "next/link";
import {useEffect, useState} from "react";
import _ from "lodash";
import ProductSectionSkeleton from "../../../skeleton/productSkeleton/ProductSectionSkeleton";
import LazyImage from "../../common/LazyImage";
import FeatureCategory from "./FeatureCategory";
import {loadAsset} from "../../../utils/Helper";
import {getFeaturedCategories} from "../../../utils/Services";

const FeaturedCategories = () => {
    const [catLoading, setFeatCatLoading] = useState(true);
    const [firstCats, setFirstCats] = useState({});
    const [othersCats, setOthersCats] = useState([]);

    let content;
    if (catLoading) content = <ProductSectionSkeleton/>;
    if (!catLoading && firstCats && othersCats) {
        content = (
            <div className='row fCenter'>
                <div className='col-md-3'>
                    <div className='firstFeatCatBox' style={{backgroundImage: `url(${loadAsset(firstCats.banner)})`}}>
                        <Link href={`${firstCats?.url}`}>
                            <h6 className='bold firstFeatCat'>{firstCats?.name}</h6>
                        </Link>
                        <div className='mx-2'>
                            <div className='row fCenter'>
                                <div className='col-7 col-md-6 my-2'>
                                    <Link href={`${firstCats?.sections[0]?.url}`}>
                                        <LazyImage
                                            classes='firstIm img-fluid'
                                            imageSrc={loadAsset(firstCats?.sections[1]?.banner)}
                                            imageAlt=''
                                        />
                                    </Link>
                                </div>
                                <div className='col-5 col-md-6 my-2'>
                                    <div>
                                        <div className='my-1 text-center'>
                                            <Link href={`${firstCats?.sections[1]?.url}`}>
                                                <LazyImage
                                                    classes='fcat1Im'
                                                    imageSrc={loadAsset(firstCats?.sections[1]?.banner)}
                                                    imageAlt=''
                                                />
                                            </Link>
                                        </div>
                                        <div className='my-1 text-center'>
                                            <Link href={`${firstCats?.sections[2]?.url}`}>
                                                <LazyImage
                                                    classes='fcat1Im'
                                                    imageSrc={loadAsset(firstCats?.sections[2]?.banner)}
                                                    imageAlt=''
                                                />
                                                {/* <img className='fcat1Im' src={loadAsset(firstCats?.sections[2]?.banner)} alt='' /> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        {othersCats.map((otherCat, index) => (
                            <FeatureCategory cat={otherCat} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const loadFeaturedCategories = async () => {
        const response = await getFeaturedCategories();
        if (!_.isEmpty(response)) {
            setOthersCats(response.non_featured);
            setFirstCats(response.featured);
        }
        setFeatCatLoading(false);
    };

    useEffect(() => {
        loadFeaturedCategories().then(r => r)
    }, [])
    return (
        <div className='container'>
            <div>
                <div>
                    <h2 className='bold topTitle text-center' style={{fontSize: "17px"}}>
                        Featured Categories
                    </h2>
                </div>
                {content}
            </div>
        </div>
    )
}
export default FeaturedCategories;