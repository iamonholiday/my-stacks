import React from 'react';
import styled from "styled-components";
import {BlockArea} from "../../../components/shares/block-area";
import BlockFlex from "../../../components/shares/block-flex";
import BlockFlexStack from "../../../components/shares/block-flex-stack";
import Layout from "../../../components/shares/layout";
import Block from "../../../components/shares/block";

const PayLayout = styled(BlockFlexStack)``

const PayWizard = styled(BlockFlex)`
  
  gap: .5rem;
  
  div.adj-line {
    
    background: #64ff00;
    height: 3px;
    
  }
`

const PayCounter = styled(BlockFlex)``

const PayOrderSummary = styled(BlockFlex)``

const PayMethodTitle = styled(BlockFlex)``

const PayMethodSelector = styled(BlockFlex)``

const Pay = ({}) => {
    return (
        <Layout layout={'layout-profile-center'}>

            <BlockArea blockType={"page-header-area"} />

            <BlockArea blockType={"page-main-area"}>

                <PayLayout>

                    <PayWizard>

                        <Block>1</Block>

                        <Block className={"align-self-center adj-line"} flex={2}></Block>
                        <Block>2</Block>

                        <Block className={"align-self-center adj-line"} flex={2}></Block>
                        <Block>3</Block>


                    </PayWizard>

                    <PayCounter>



                    </PayCounter>

                    <PayOrderSummary></PayOrderSummary>

                    <PayMethodTitle></PayMethodTitle>

                    <PayMethodSelector></PayMethodSelector>

                </PayLayout>

            </BlockArea>

            <BlockArea blockType={"page-footer-area"} />

        </Layout>
    );
};

Pay.propTypes = {

};

export default Pay;
