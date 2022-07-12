import React from 'react';
import PropTypes from 'prop-types';
import {BlockArea} from "../../components/shares/block-area";
import MyAccount from "../user-profile/my-account";
import Layout from "../../components/shares/layout";
import {PurchaseTierSelectorBlock, PurchaseTierTitleBlock} from "./purchase-styled";
import BlockFlexStack from "../../components/shares/block-flex-stack";
import Block from "../../components/shares/block";
import Link from "next/link";

const Purchase = ({}) => {

    const {data : tiersData, error: tiersError, loading: tiersLoading} = {

        data : [
            {tierName: "1 month", tierCode: "1M", price: 29, priceUnit: "thb", periodNote: "1 month"},
            {tierName: "3 month", tierCode: "3M", price: 49, priceUnit: "thb", periodNote: "3 months"},
            {tierName: "12 month", tierCode: "12M", price: 99, priceUnit: "thb", periodNote: "12 months"},
        ]

    }

    const toBuy = () => {


    }

    return (
        <Layout layout={'layout-profile-center'}>

            <BlockArea blockType={"page-header-area"} />

            <BlockArea blockType={"page-main-area"}>


                <PurchaseTierTitleBlock>
                    <h3>Premium membership</h3>
                    <ul>
                        <li>Get the mouse of the signals.</li>
                        <li>Immediate access to signals on the site.</li>
                        <li>No Ads.</li>
                    </ul>
                </PurchaseTierTitleBlock>

                <PurchaseTierSelectorBlock>

                    {
                        tiersData?.map(ie => {

                            return <BlockFlexStack className={"adj-stack"}>

                                <Block><span className={"fs-1"}>{ie.tierName}</span></Block>
                                <Block>{ie.periodNote}</Block>
                                <Block>
                                    {/*LINK: /purchase/order*/}
                                    <Link href={`/purchase/order`}><button type="button">Buy</button></Link>
                                </Block>

                            </BlockFlexStack>
                        })
                    }

                </PurchaseTierSelectorBlock>

            </BlockArea>

            <BlockArea blockType={"page-footer-area"} />

        </Layout>
    );
};

Purchase.propTypes = {

};

export default Purchase;
