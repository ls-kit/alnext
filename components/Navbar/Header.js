import Link from "next/link";
import {FaRegUserCircle, FaShoppingCart} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";
import SearchForm from "./includes/SearchForm";

const Header = () => {
    return (
        <header className="header header-intro-clearance header-26 shadow-0">
            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <Link href="/" className="logo">
                            <img
                                src={'https://admin.alibainternational.com/storage/setting/logo/600x600%20international.png'}
                                alt={'alibainternational'}
                                width={"60"}
                                height={"40"}
                            />
                        </Link>
                    </div>

                    <div className="header-center">
                        <SearchForm />
                    </div>

                    <div className="header-right">
                        <div className="header-dropdown-link">
                            <div className="wishlist">
                                <Link href="/pages/blog">
                                    <div className="icon">
                                        <span className="ml-2 fw-bold d-md-inline d-none nav-item-text">
                                          Blog
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="wishlist">
                                <Link href="/checkout" title="Cart">
                                    <div className="icon">
                                        <FaShoppingCart/>
                                        <span className="wishlist-count badge">
                                            20
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="wishlist">
                                <Link href="/wishlist" title="Wishlist">
                                    <div className="icon">
                                        <FiHeart/>
                                        <span className="wishlist-count badge">
                                        50
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div className="cart-dropdown">
                                <Link
                                    href="/login"
                                    className="dropdown-hrefggle"
                                    role="buthrefn"
                                    id="cd"
                                >
                                    <div className="icon">
                                        <FaRegUserCircle/>
                                        <span className="ml-2 fw-bold d-md-inline d-none nav-item-text">
                                                Login
                                            </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header