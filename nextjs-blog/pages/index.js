import Charts from "../components/charts";
import RecentSignal from "../components/recent-signal";
import PairListMenu from "../components/pair-list-menu";
import {BlockArea} from "../components/block-area";
import Layout from "../components/shares/layout";

export default function Home({layout = 'layoutProfileCenter'}) {

  return <Layout layout={'layoutProfileCenter'}>

    <BlockArea blockType={"main-area"} placeType={'replace'}>

      <Charts />
    </BlockArea>

    <BlockArea blockType={"ads-area"} />

    <BlockArea blockType={"bottom-area"} placeType={"top"}>

      <RecentSignal pair={'eurusd'} />

    </BlockArea>

    <BlockArea blockType={"head-area"} placeType={"bottom"}>

      <PairListMenu />
    </BlockArea>
  </Layout>
}
