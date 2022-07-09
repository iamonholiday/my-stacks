import {useEffect, useState, createContext} from "react";

export const CompContext = createContext([]);

export const CompProvider = ({ children }) => {


    /* This is a React Hook that allows us to set the state of the authCodes. */
    const [authCodes, setAuthCodes] = useState([]);


    useEffect(() => {

        const loadCodes = () => {

            const codes = JSON.parse(localStorage[TEMP_AUTHORIZED_DATA] || "[]");
            setAuthCodes(codes || []);
        };


        loadCodes();
        window.addEventListener('storage', loadCodes);

        return () => {
            window.removeEventListener('storage', loadCodes);
        };

    }, []);
    return (
        <CompContext.Provider value={authCodes}>
            {children}
        </CompContext.Provider>
    );
};
