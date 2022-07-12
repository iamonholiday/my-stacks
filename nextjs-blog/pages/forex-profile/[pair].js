import React from 'react';
import style from './forex-profile.module.scss'
import {BlockArea} from "../../components/shares/block-area";
import Charts from "../../components/charts";
import RecentSignal from "../../components/recent-signal";
import PairListMenu from "../../components/pair-list-menu";
import Layout from "../../components/shares/layout";
import {useRouter} from "next/router";




const Pair = ({}) => {

    const router = useRouter()
    const { pair } = router.query

    return <Layout layout={'layout-default'}>

        <BlockArea blockType={"page-main-area"} placeType={'replace'}>

            <Charts pair={pair} />
        </BlockArea>

        {/*<BlockArea blockType={"ads-area"} />*/}

        <BlockArea blockType={"page-sidebar-area"}>

            left
        </BlockArea>

        <BlockArea blockType={"page-ads-area"} />

        <BlockArea blockType={"page-header-area"} placeType={"bottom"}>

            <PairListMenu activePair={pair} />
        </BlockArea>

        <BlockArea blockType={"page-extended-area"}>

            <RecentSignal pair={pair} />
        </BlockArea>

        <BlockArea blockType={"page-footer-area"} />

    </Layout>

}
export default Pair
