import PropTypes from "prop-types";
import _ from "lodash";
import Link from "next/link";

const Breadcrumb = (props) => {
    const {current, collections} = props;
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav bg-white mb-1">
            <div className="container d-flex align-items-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    {
                        !_.isEmpty(collections) && _.isArray(collections) && (
                            collections.map((item, key) =>
                                <li key={key} className="breadcrumb-item">
                                    {
                                        item.url ?
                                            <Link href={`/${item.url}`}>{item.name && item.name}</Link>
                                            :
                                            <span>{item.name && item.name}</span>
                                    }
                                </li>
                            )
                        )
                    }
                    <li className="breadcrumb-item active" aria-current="page">
                        {current}
                    </li>
                </ol>

            </div>
        </nav>
    )
}

Breadcrumb.propTypes = {
    current: PropTypes.string.isRequired,
    collections: PropTypes.array
};

export default Breadcrumb