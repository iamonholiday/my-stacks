import React from 'react';
import style from './forex-profile.module.scss'
import {BlockArea} from "../../components/block-area";
import Charts from "../../components/charts";
import RecentSignal from "../../components/recent-signal";
import PairListMenu from "../../components/pair-list-menu";
import Layout from "../../components/shares/layout";


const Pair = ({}) => <Layout layout={'layout-profile-center'}>

        <BlockArea blockType={"main-area"} placeType={'replace'}>

            <Charts />
        </BlockArea>

        {/*<BlockArea blockType={"ads-area"} />*/}

        <BlockArea blockType={"ads-left-area"}>

            left
        </BlockArea>

        <BlockArea blockType={"ads-right-area"}>

            right
        </BlockArea>

        <BlockArea blockType={"head-area"} placeType={"bottom"}>

            <PairListMenu />
        </BlockArea>

        <BlockArea blockType={"extended-area"}>

            <RecentSignal pair={'eurusd'} />
        </BlockArea>

        <BlockArea blockType={"footer-area"} />

    </Layout>

export default Pair
