import React from 'react';
import PropTypes from 'prop-types';
import {BlockArea} from "../../components/shares/block-area";
import Charts from "../../components/charts";
import PairListMenu from "../../components/pair-list-menu";
import RecentSignal from "../../components/recent-signal";
import Layout from "../../components/shares/layout";
import MyAccount from "./my-account";

UserProfile.propTypes = {

};

function UserProfile({}) {

    return <Layout layout={'layout-profile-center'}>

        <BlockArea blockType={"page-header-area"} />

        <BlockArea blockType={"page-main-area"}>

            <MyAccount />
        </BlockArea>

        <BlockArea blockType={"page-footer-area"} />

    </Layout>
}

export default UserProfile;
