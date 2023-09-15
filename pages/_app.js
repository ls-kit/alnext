import 'bootstrap/dist/css/bootstrap.css'
import "scss/App.scss";
import "scss/Icon.scss";
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import store from "store/store";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp