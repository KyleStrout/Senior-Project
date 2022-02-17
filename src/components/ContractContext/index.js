import React from "react";

// Thinking something like
/*
    {
        "section-url": {
            "compilerData": [],
            "transactionHistory": [],
        },
        for each section...
    }
*/
const ContractContext = React.createContext({});

export const ContractProvider = ContractContext.Provider;

export default ContractContext;
