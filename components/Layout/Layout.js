import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="page-wrapper">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout