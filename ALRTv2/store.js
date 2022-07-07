import React, {useState} from 'react';
// import {createContext} from 'react';

const priceState = {
    text: "Price_Info",
    value: 0,
    key: 1
};

const callState ={
    text: "Call_Info",
    value: 0,
    expected: 0,
    key: 2
};

const putState ={
    text: "Put_Info",
    value: 0,
    expected: 0,
    key: 3
};

export const InfoContext = React.createContext();
// export const CallContext = React.createContext();
// export const PutContext =React.createContext();

const InfoProvider = ({children}) =>{
    const [price, setPrice] = useState(priceState);
    const [call, setCall] = useState(callState);
    const [put, setPut] = useState(putState);

    return(
        <InfoContext.Provider value = {{priceData: [price, setPrice], callData: [call, setCall], putData: [put, setPut]}}>
            {children}
        </InfoContext.Provider>
    )
}


export default InfoProvider;
