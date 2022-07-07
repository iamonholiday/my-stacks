// pages/_app.js
import variables from '../styles/variables.module.scss'
import Layout from "../components/layout";
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
    return (

        <Layout color={variables.primaryColor}>
            <Component {...pageProps} />
        </Layout>
    )
}
