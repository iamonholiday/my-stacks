import Charts from "../components/charts";
import RecentSignal from "../components/recent-signal";
import PairListMenu from "../components/pair-list-menu";
import {BlockArea} from "../components/block-area";
import Layout from "../components/shares/layout";

export default function Home({layout = 'layoutProfileCenter'}) {

  return <Layout layout={'layout-default'}>

    <BlockArea blockType={"page-main-area"} placeType={'replace'}>

      <Charts />
    </BlockArea>

    {/*<BlockArea blockType={"ads-area"} />*/}

    <BlockArea blockType={"page-sidebar-area"}>

      left
    </BlockArea>

    <BlockArea blockType={"page-ads-area"} />

    <BlockArea blockType={"page-header-area"} placeType={"bottom"}>

      <PairListMenu />
    </BlockArea>

    <BlockArea blockType={"page-extended-area"}>

      <RecentSignal pair={'eurusd'} />
    </BlockArea>

    <BlockArea blockType={"page-footer-area"} />

  </Layout>
}
