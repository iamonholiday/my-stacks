import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import Layout from "../../../components/shares/layout";
import {BlockArea} from "../../../components/shares/block-area";
import {PerformanceChartBlock} from "./performance-styled";
import Charts from "../../../components/charts";
import PairListMenu from "../../../components/pair-list-menu";
import RecentSignal from "../../../components/recent-signal";

const Performance = ({}) => {

    const router = useRouter()
    const { pair } = router.query


    return <Layout layout={'layout-default'}>

        <BlockArea blockType={"page-main-area"} placeType={'replace'}>

            <PerformanceChartBlock>

                <Charts />

            </PerformanceChartBlock>

        </BlockArea>

        {/*<BlockArea blockType={"ads-area"} />*/}

        {/*<BlockArea blockType={"page-sidebar-area"} />*/}

        <BlockArea blockType={"page-ads-area"} />

        <BlockArea blockType={"page-header-area"} placeType={"bottom"}>

            <PairListMenu activePair={pair} />
        </BlockArea>

        <BlockArea blockType={"page-extended-area"}>
            <span className={"fs-1"}>{pair}</span>
            <RecentSignal pair={pair} />
        </BlockArea>

        <BlockArea blockType={"page-footer-area"} />

    </Layout>
}

Performance.propTypes = {

    };

export default Performance;
