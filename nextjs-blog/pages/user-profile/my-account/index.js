import React from 'react';
import BlockFlex from "../../../components/shares/block-flex";
import BlockForm from "../../../components/shares/block-form";
import BlockFlexStack from "../../../components/shares/block-flex-stack";
import {MyAccountFormControl, MyAccountFormLabel, MyAccountFormLine, MyAccountWarnBlock} from "../user-profile-styled"
import Block from "../../../components/shares/block";

const MyAccount = props => {


    const {data : profileData, loading : profileLoading, error : profileError} = {

        data : {
            licenseeType: "free",
            email: "hereiam@gmail.com",
            username: "hereiam",
            avatarUrl: "@avatar"
        }

    }


    return (
        <BlockFlexStack>

            {/*Premium*/}
            <MyAccountFormLine>


                    {profileData.licenseeType !== "premium" && <>


                        <MyAccountFormLabel>
                            <Block>

                                <span className="glyphicon glyphicon-cloud">&nbsp;</span> <label>Premium</label>

                            </Block>
                            <Block>

                                <button className={"btn btn-primary "}>Buy &gt;&gt;</button>
                            </Block>
                        </MyAccountFormLabel>

                        {/*alert*/}
                        <MyAccountWarnBlock style={{flex: 1 }}>

                            <Block><span className={`fs-3`}>Your Premium is NOT active</span></Block>
                            <Block><span className={`fw-bold`}>Expiration date: 5/17/2020, 3:15:00 PM</span></Block>

                        </MyAccountWarnBlock>


                    </>}

            </MyAccountFormLine>

            {/*Email*/}
            <MyAccountFormLine>

                <MyAccountFormLabel>
                    <Block>
                        <span className="glyphicon glyphicon-cloud">&nbsp;</span> <label>Email</label>
                    </Block>
                    <Block>
                        <button className={"btn btn-outline-primary"}>Change</button>
                    </Block>
                </MyAccountFormLabel>

                <MyAccountFormControl>

                    <Block>
                        <input type={"text"} readOnly />
                    </Block>
                </MyAccountFormControl>

            </MyAccountFormLine>

            {/*Username*/}
            <MyAccountFormLine>


                <MyAccountFormLabel>
                    <Block>

                        <span className="glyphicon glyphicon-cloud">&nbsp;</span> <label>Username</label>

                    </Block>
                    <Block>

                        <button className={"btn btn-outline-primary"}>Change</button>
                    </Block>
                </MyAccountFormLabel>

                <MyAccountFormControl>
                    <Block>
                        <input type={"text"} readOnly />
                    </Block>
                </MyAccountFormControl>


            </MyAccountFormLine>

            {/*Avatar*/}
            <MyAccountFormLine>


                <MyAccountFormLabel>
                    <Block>

                        <span className="glyphicon glyphicon-cloud">&nbsp;</span> <label>Avatar</label>

                    </Block>
                    <Block>

                        <button className={"btn btn-outline-primary"}>Upload new</button>
                    </Block>
                </MyAccountFormLabel>

                <MyAccountFormControl>
                    <Block>
                        <input type={"file"} readOnly />
                    </Block>
                </MyAccountFormControl>

            </MyAccountFormLine>

        </BlockFlexStack>
    );
};

MyAccount.propTypes = {

};

export default MyAccount;
