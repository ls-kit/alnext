import {useDispatch, useSelector} from "react-redux";
import {filter_parent_cats, loadAsset} from 'utils/Helper';
import Link from "next/link";
import {useEffect} from "react";
import {loadCategories} from "../../../store/actions/InitAction";
import MegaMenuItem from "./MegaMenuItem";

const BrowseCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.INIT.categories);
    const category_loading = useSelector((state) => state.LOADING.category_loading);
    const parents = filter_parent_cats(categories);

    useEffect(() => {
        dispatch(loadCategories());
    }, [dispatch]);

    return (
        <nav className='side-nav h-100 bg-white'>
            <div
                className='sidenav-title letter-spacing-normal font-size-normal d-flex bg-white align-items-center text-dark text-truncate px-3'>
                <i className='icon-bars float-right h5 text-dark m-0 mr-3 d-none d-xl-block'/>
                Categories
            </div>
            <ul className='menu-vertical sf-arrows sf-js-enabled p-0 shadow-0' style={{touchAction: "pan-y"}}>
                {parents.length > 0 &&
                parents.map((parent, index) => {
                    if (parent?.children_count) {
                        return <MegaMenuItem key={index} parent={parent} categories={categories}/>;
                    } else {
                        return (
                            <li key={index}>
                                <Link href={`/shop/${parent?.slug}`} className='text-dark'>
                                    {parent.icon ? (
                                        <img
                                            src={loadAsset(parent.icon)}
                                            style={{width: "22px", display: "inline", marginRight: "1rem"}}
                                            alt={parent.name}
                                        />
                                    ) : (
                                        <i className='icon-laptop'/>
                                    )}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    )
}
export default BrowseCategories