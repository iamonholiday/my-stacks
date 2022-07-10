// pages/_app.js
import variables from '../styles/variables.module.scss'
import Layout from "../components/shares/layout";
import '../styles/global.scss';
// import "../styles/layout.scss"
// import bootstrap from 'bootstrap';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import utilStyles from "../styles/utils.module.scss";
// own css files here
// import "../css/customcss.css";
import { OpenAPIProvider } from 'react-openapi-client'


export default function MyApp({ Component, pageProps }) {
    return <>
        <OpenAPIProvider definition="https://petstore.swagger.io/v2/swagger.json">

            <Component {...pageProps} />

        </OpenAPIProvider>
    </>
}
