import Charts from "../components/charts";
import styles from "../components/shares/layout.module.scss";
import Footer from "../components/shares/footer";
import RecentSignal from "../components/recent-signal";
import PairListMenu from "../components/pair-list-menu";
import Navbar from "../components/shares/navbar";
import PageHeader from "../components/shares/page-header";
import {BlockArea} from "../components/block-area";

export default function Home() {

  return <>

    <BlockArea blockType={"main-area"} placeType={'replace'}>

      <Charts />
    </BlockArea>

    <BlockArea blockType={"ads-area"} >ff</BlockArea>

    <BlockArea blockType={"bottom-area"}>

      <RecentSignal pair={'eurusd'} />

    </BlockArea>


    <BlockArea blockType={"head-area"}>

      <PairListMenu />
    </BlockArea>

  </>
}
