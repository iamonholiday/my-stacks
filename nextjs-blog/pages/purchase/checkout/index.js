import React from 'react';
import PropTypes from 'prop-types';
import {BlockArea} from "../../../components/shares/block-area";
import BlockFlexStack from "../../../components/shares/block-flex-stack";
import Block from "../../../components/shares/block";
import Link from "next/link";
import Layout from "../../../components/shares/layout";
import styled from "styled-components";
import BlockFlex from "../../../components/shares/block-flex";
import BlockImage from "../../../components/shares/block-image";
import BlockInput from "../../../components/shares/block-input";
import ElemP from "../../../components/shares/elem-p";
import style from "../purchase.module.scss"
import ElemButton from "../../../components/shares/elem-button";

export const PurchaseOrderContainerStack = styled(BlockFlexStack)`
  
  
`

export const PurchaseOrderTimeCounterBlockFlex = styled(BlockFlex).attrs({
    className: "alert alert-info mb-0"
})`

  & div.adj-v-center {

    align-self: center !important;
  }
  
  & div:nth-of-type(1) {
    flex: 1
  }

  & div:nth-of-type(2) {
    flex: 3
  }
  
    
`

export const PurchaseOrderProductPreviewBlockFlex = styled(BlockFlex)`
  
    
    
`

export const PurchaseOrderSummaryPreviewBlockStack = styled(BlockFlexStack)`
  
    background: blanchedalmond;
`

export const PurchaseOrderReviewBuyerBlockFlex = styled(BlockFlexStack)`
  
`

export const PurchaseOrderReviewOrderedStack = styled(BlockFlexStack)`
  
`

export const PurchaseOrderActionBlockFlex = styled(BlockFlex)`
  
`




const Checkout = ({}) => {

    const {
        data : orderData
    } = {
        data : {

            orderNo: "342323",
            orderLines: [{
                itemName: "premium 3 months",
                price: 20,
                priceUnit: "thb",
                fee: null,
                qty: 1,
                subtotal: 230
            }]
        }
    }


    return (
        <Layout layout={'layout-profile-center'}>

            <BlockArea blockType={"page-header-area"} />

            <BlockArea blockType={"page-main-area"}>

            <PurchaseOrderContainerStack>

                <PurchaseOrderTimeCounterBlockFlex>

                    <Block className={'adj-v-center'}>
                        <h3>11:40</h3>
                    </Block>

                    <Block className={'adj-v-center'}>
                        <p className={"p-0 m-0"}>
                            We also support more complex styles (like transform), which would normally be an array, and shorthands (e.g. for margin) thanks to css-to-react-native!
                        </p>
                    </Block>

                </PurchaseOrderTimeCounterBlockFlex>

                <PurchaseOrderProductPreviewBlockFlex>

                    <Block flex={1}>


                        <BlockImage
                            src={"https://files.vogue.co.th/uploads/f27d96a6440bf4cc69be0112997fc52c.jpg"} />
                    </Block>

                    <Block flex={5} className={'adj-v-center'}>

                        <strong>3Months</strong>

                        <p className={"p-0 m-0"}>
                            3 months membership.
                        </p>

                    </Block>


                </PurchaseOrderProductPreviewBlockFlex>

                <PurchaseOrderSummaryPreviewBlockStack>

                    <Block>
                        Total Orders(s)
                    </Block>

                    <BlockFlex>

                        <Block flex={5}>
                            Premiuum 1 Month
                        </Block>

                        <Block flex={3}>
                            2560
                        </Block>

                        <Block flex={1}>
                            x1
                        </Block>

                    </BlockFlex>


                </PurchaseOrderSummaryPreviewBlockStack>

                <PurchaseOrderReviewBuyerBlockFlex>

                    <Block>
                        <h3>Review Information</h3>
                    </Block>

                    <div className="clearfix" />

                    <BlockFlex className={"row p-0"}>

                        <BlockInput label={"First name"} className={"col-6"}>
                            <input type={"text"}/>
                        </BlockInput>

                        <BlockInput label={"Last name"} className={"col-6"}>
                            <input type={"text"}/>
                        </BlockInput>


                        <BlockInput label={"Email"} className={"col-6"}>
                            <input type={"text"}/>
                        </BlockInput>

                        <BlockInput label={"Mobile phone number"} className={"col-6"}>
                            <input type={"text"}/>
                        </BlockInput>

                    </BlockFlex>

                </PurchaseOrderReviewBuyerBlockFlex>

                <PurchaseOrderReviewOrderedStack>

                    <Block>
                        <h3>Review Order Summary</h3>
                    </Block>

                    <BlockFlexStack>

                        <BlockFlex>
                            <Block flex={4}>
                                Item
                            </Block>

                            <Block flex={1}>
                                Price
                            </Block>

                            <Block flex={1}>
                                Fee (Incl. VAT)
                            </Block>

                            <Block flex={1}>
                                Quantity
                            </Block>

                            <Block flex={1}>
                                Subtotal
                            </Block>
                        </BlockFlex>

                        {
                            orderData.orderLines?.map(ie => {

                                return <BlockFlex>
                                    <Block flex={4}>
                                        {ie.itemName}
                                    </Block>

                                    <Block flex={1}>
                                        {ie.price}
                                    </Block>

                                    <Block flex={1}>
                                        {ie.fee}
                                    </Block>

                                    <Block flex={1}>
                                        {ie.qty}
                                    </Block>

                                    <Block flex={1}>
                                        {ie.subtotal}
                                    </Block>
                                </BlockFlex>

                            })

                        }

                        <Block>
                            <ElemP>
                                We also support more complex styles (like transform), which would normally be an array, and shorthands (e.g. for margin) thanks to css-to-react-native!
                            </ElemP>

                            <ElemP>
                                <input type={"checkbox"} /> We also support more complex styles (like transform), which would normally be an array, and shorthands (e.g. for margin) thanks to css-to-react-native!
                            </ElemP>
                        </Block>

                        <BlockFlex className={"justify-content-between"}>

                            <Block>
                                <ElemButton type={"button"} className={"btn-outline-secondary"}>Cancel This Order</ElemButton>
                            </Block>
                            <Block>
                                <ElemButton type={"button"} className={'btn-primary'} >Confirm</ElemButton>
                            </Block>

                        </BlockFlex>

                    </BlockFlexStack>

                </PurchaseOrderReviewOrderedStack>

                <PurchaseOrderActionBlockFlex>



                </PurchaseOrderActionBlockFlex>

            </PurchaseOrderContainerStack>


            </BlockArea>

            <BlockArea blockType={"page-footer-area"} />

        </Layout>
    );
};

Checkout.propTypes = {

};

export default Checkout;
