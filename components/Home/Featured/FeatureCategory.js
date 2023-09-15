import Link from "next/link";
import LazyImage from "../../common/LazyImage";
import {loadAsset} from "../../../utils/Helper";


export const SubFeatureCategory = ({ section }) => {
    const { banner, url } = section;

    return (
        <div className='col-4'>
            <Link href={`${url}`} className='flexCenter'>
                <LazyImage classes='fcatIm' imageSrc={loadAsset(banner)} imageAlt='' />
            </Link>
        </div>
    );
};

const FeatureCategory = ({ cat }) => {
    const { name, url, sections } = cat;

    return (
        <div className='col-lg-4 col-md-6 my-2 '>
            <div className='singleFeatCat hov-shadow'>
                <Link href={`${url}`}>
                    <h6 className='fcatName'>{name}</h6>
                </Link>

                <div className='row'>
                    {sections.map((section, index) => (
                        <SubFeatureCategory section={section} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureCategory