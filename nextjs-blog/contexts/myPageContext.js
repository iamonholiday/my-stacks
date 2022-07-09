import {useEffect, useState, createContext} from "react";

export const MyPageContext = createContext([]);

export const MyPageProvider = ({ children }) => {


    const [myPageObject, setMyPageObject] = useState({});

    useEffect(() => {



    }, []);

    return (
        <MyPageContext.Provider value={myPageObject}>
            {children}
        </MyPageContext.Provider>
    );
};
