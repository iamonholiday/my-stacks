import Charts from "../components/charts";
import styles from "../components/shares/layout.module.scss";
import Footer from "../components/shares/footer";
import RecentSignal from "../components/recent-signal";

export default function Home() {

  return <>

    <div id={styles["main-area"]}>

      <Charts />
    </div>
    <div id={styles["ads-area"]}>

      <img src={'https://stepstraining.co/wp-content/uploads/2020/06/20200613_Google_Ads_VS_Facebook_Ads_Website.png'} />
    </div>
    <div id={styles["bottom-area"]}>


      <RecentSignal pair={'eurusd'} />

      <Footer />
    </div>


  </>
}
