import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadBanners, loadGeneral} from "../../store/actions/InitAction";

const Layout = ({children}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const general = useSelector((state => state.INIT.general));

    useEffect(() => {
        if (!loading) {
            dispatch(loadBanners()); // Set loading to true before dispatching the action
            dispatch(loadGeneral());
        }
        setLoading(false)
    }, [])

    return (
        <>
            <Header general={general}/>
                <div className="page-wrapper">
                    {children}
                </div>
            <Footer general={general}/>
        </>
    )
}

export default Layout