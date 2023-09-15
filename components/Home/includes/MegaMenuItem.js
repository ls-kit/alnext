import {filter_children_cats, loadAsset} from "utils/Helper";
import Link from "next/link";

const MegaMenuItem = (props) => {
    const { parent, categories } = props;
    const children_cats = filter_children_cats(categories, parent.otc_id);

    return (
        <li className='megamenu-container'>
            <Link className='sf-with-ul text-dark border-0 px-3 py-3 icon-none' href={`/${parent.slug}`}>
                {parent.icon ? (
                    <img
                        src={loadAsset(parent.icon)}
                        style={{ width: "22px", display: "inline", marginRight: "1rem" }}
                        alt={parent.name}
                    />
                ) : (
                    <i className='icon-laptop' />
                )}
                {parent.name}
            </Link>
            <div className='megamenu'>
                <div className='row '>
                    <div className='col-md-12'>
                        <div className='menu-col'>
                            <div className='row'>
                                {children_cats.length > 0 &&
                                children_cats.map((child, index) => (
                                    <div className='col-md-4' key={index}>
                                        <Link
                                            href={child.children_count ? `/${parent.slug}/${child.slug}` : `/shop/${child.slug}`}
                                            className='menu-title'
                                        >
                                            {child.name}
                                        </Link>
                                        {/*<SubChildrenItem categories={categories} children={child} />*/}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End .col-md-12 */}
                </div>
            </div>
        </li>
    )
}
export default MegaMenuItem