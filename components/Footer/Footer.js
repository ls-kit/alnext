import Link from "next/link";
import {loadAsset} from "../../utils/Helper";

const Footer = (props) => {
    const { general } = props;
    return (
        <footer className="footer footer-2" style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <hr
                    className="mt-0 mb-0"
                    style={{ borderColor: "#f4d682", borderWidth: "3px" }}
                />
            </div>
            <div className="footer-middle border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="widget widget-about mb-4">
                                <div>
                                    <Link href="/">
                                        <img
                                            src={loadAsset(general?.frontend_logo_footer)}
                                            className="footer-logo"
                                            alt={general?.site_name}
                                            width={"60"}
                                            height={"40"}
                                        />
                                    </Link>
                                    <div>
                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-map-marker" />
                                                <span className="bold">HEAD OFFICE:</span>
                                                <br />
                                                <span>{general?.office_address}</span>
                                            </li>
                                            <li>
                                                <i className="icon-envelope" />
                                                <span className="bold">EMAIL:</span>
                                                <br />
                                                <a
                                                    className="fot-mail"
                                                    href={`mailhref:${general?.office_email}`}
                                                >
                                                    {general?.office_email}
                                                </a>
                                            </li>
                                            <li>
                                                <i className="icon-phone" />
                                                <span className="bold">PHONE:</span>
                                                <br />
                                                <a href={`tel:${general?.office_phone}`}>
                                                    {general?.office_phone}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {general?.frontend_logo_footer_two && (
                                        <Link href="/">
                                            <img
                                                src={loadAsset(general?.frontend_logo_footer_two)}
                                                className="footer-logo"
                                                alt={general?.site_name}
                                            />
                                        </Link>
                                    )}

                                    {/* End .widget-about-info */}
                                </div>
                            </div>
                            {/* End .widget about-widget */}
                        </div>
                        {/* End .col-sm-4 col-lg-3 */}
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="widget mb-4">
                                <div>
                                    <h4 className="widget-title uppercase">Cushrefmer</h4>
                                    {/* End .widget-title */}
                                    <ul className="widget-list">
                                        <li>
                                            <Link href="/login">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/special-offer">Special Offer</Link>
                                        </li>
                                        <li>
                                            <Link href="/checkout">View Cart</Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/orders">Track My Order</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/minimum-order-quantity">
                                                Minimum Order Quantity
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/prohibited-items">Prohibited Items</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/delivery-charges">Delivery charges</Link>
                                        </li>

                                        <li>
                                            <Link href="/pages/cushrefm-and-shipping-charge">
                                                Cushrefm and Shipping charge
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">Faq</Link>
                                        </li>
                                    </ul>
                                    {/* End .widget-list */}
                                </div>
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-sm-64 col-lg-3 */}
                        {/* End .col-sm-12 col-lg-3 */}
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="widget mb-4">
                                <div>
                                    <h4 className="widget-title uppercase">Information</h4>
                                    {/* End .widget-title */}
                                    <ul className="widget-list">
                                        <li>
                                            <Link href="/pages/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact us</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/privacy-policy">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/terms-conditions">
                                                Terms and conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/return-and-refund-policy">
                                                Return and Refund Policy
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/pages/shipping-and-delivery">
                                                Shipping and Delivery Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/secured-payment">Secured Payment</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/transparency">Transparency</Link>
                                        </li>
                                    </ul>
                                    {/* End .widget-list */}
                                </div>
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-sm-4 col-lg-3 */}
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="widget mb-4">
                                <div>
                                    {/* <h4 className='widget-title uppercase'>Mobile Apps</h4>
                  <ul className='widget-list'>
                    <li>
                      <a href='#' target='_blank'>
                        <img
                          src={gPlay}
                          alt='Google Play'
                          style={{ width: "126px", marginBothrefm: "0.5rem" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <img src={aShrefre} alt='App Shrefre' style={{ width: "126px", marginBothrefm: "2rem" }} />
                      </a>
                    </li>
                  </ul> */}
                                    <h4 className="widget-title uppercase">Social Links</h4>
                                    <div className="social-icons">
                                        {general?.facebook && (
                                            <a
                                                href={general.facebook}
                                                className="f-social-icon "
                                                title="Facebook"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={Facebook}
                                                    alt="Facebook"
                                                    width={"25"}
                                                    height={"25"}
                                                />
                                            </a>
                                        )}

                                        {general?.instagram && (
                                            <a
                                                href={general.instagram}
                                                className="f-social-icon "
                                                title="Instagram"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={instagram}
                                                    alt="instagram"
                                                    width={"25"}
                                                    height={"25"}
                                                />
                                            </a>
                                        )}
                                        {general?.youtube && (
                                            <a
                                                href={general.youtube}
                                                className="f-social-icon "
                                                title="Youtube"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={youtube}
                                                    alt="youtube"
                                                    width={"25"}
                                                    height={"25"}
                                                />
                                            </a>
                                        )}

                                        {general?.twitter && (
                                            <a
                                                href={general.twitter}
                                                className="f-social-icon "
                                                title="Twitter"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    src={likedin}
                                                    alt="linkedin"
                                                    width={"25"}
                                                    height={"25"}
                                                />
                                            </a>
                                        )}
                                    </div>
                                    {/* <ul className='widget-list'></ul> */}
                                    {/* End .widget-list */}
                                </div>
                            </div>
                            {/* End .widget */}
                        </div>
                    </div>
                    {/* End .row */}
                    {/* <div className='d-flex justify-content-center'>
            <img src={loadAsset(footerBrandImage.brand_one)} alt='' />
          </div> */}
                    {/* <div className='d-flex justify-content-center'>
            <div className='d-flex align-items-center'>
              <a href={footerBrandInfo?.brand_two?.url} target='blank'>
                <img src={loadAsset(footerBrandInfo?.brand_two?.image)} alt='' />
              </a>
              <a href={footerBrandInfo?.brand_three?.url} target='blank'>
                <img src={loadAsset(footerBrandInfo?.brand_three?.image)} alt='' />
              </a>
              <a href={footerBrandInfo?.brand_four?.url} target='blank'>
                <img src={loadAsset(footerBrandInfo?.brand_four?.image)} alt='' />
              </a>

              <a href={footerBrandInfo?.brand_five?.url} target='blank'>
                <img src={loadAsset(footerBrandInfo?.brand_five?.image)} alt='' />
              </a>
            </div>
          </div> */}
                </div>
                {/* End .container */}
            </div>

            {/*<StickyFooterManage general={general} />*/}
        </footer>
    )
}

export default Footer