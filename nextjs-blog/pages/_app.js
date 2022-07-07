// pages/_app.js
import variables from '../styles/variables.module.scss'
import Layout from "../components/layout";
import '../styles/global.scss';
// import bootstrap from 'bootstrap';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import utilStyles from "../styles/utils.module.scss";
// own css files here
// import "../css/customcss.css";


export default function MyApp({ Component, pageProps }) {
    return <>

        <Layout color={variables.primaryColor}>
            <Component {...pageProps} />
        </Layout>

    </>
}
