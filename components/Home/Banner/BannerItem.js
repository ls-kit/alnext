import React from "react";
import parser from "html-react-parser";
import { loadAsset } from "../../../utils/Helper";

const $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
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