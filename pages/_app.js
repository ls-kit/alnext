import 'bootstrap/dist/css/bootstrap.css'
import "scss/App.scss";
import "scss/Icon.scss";
import Layout from "../components/Layout/Layout";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "store/store";
import {useEffect, useState} from "react";
import {loadBanners, loadGeneral} from "../store/actions/InitAction";

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