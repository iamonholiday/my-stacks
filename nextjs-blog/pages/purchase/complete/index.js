import React from 'react';
import styled from "styled-components";
import {BlockArea} from "../../../components/shares/block-area";
import BlockFlex from "../../../components/shares/block-flex";
import BlockFlexStack from "../../../components/shares/block-flex-stack";
import Layout from "../../../components/shares/layout";
import Block from "../../../components/shares/block";

const CompleteLayout = styled(BlockFlexStack)``


const Complete = ({}) => {
    return (
        <Layout layout={'layout-profile-center'}>

            <BlockArea blockType={"page-header-area"} />

            <BlockArea blockType={"page-main-area"}>

                <CompleteLayout>

                    <Block>
                        Your Transaction is completed.
                    </Block>

                </CompleteLayout>

            </BlockArea>

            <BlockArea blockType={"page-footer-area"} />

        </Layout>
    );
};

Complete.propTypes = {

};

export default Complete;
