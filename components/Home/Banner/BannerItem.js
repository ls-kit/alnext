import {loadAsset} from "../../../utils/Helper";
import parser from "html-react-parser";

const BannerItem = ({banner}) => {
    const content = `${banner?.post_content}`;
    return (
        <div
            key={banner.id}
            className='intro-slide bg-image d-flex align-items-center'
            style={{
                backgroundColor: "#e9e9e9",
                backgroundImage: `url(${loadAsset(banner.post_thumb)})`,
            }}
        >
            {parser(content)}
        </div>
    );
}

export default BannerItem