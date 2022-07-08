import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import HeaderNative from "../components/header";
import React from 'react';

import CallInfo from "../screens/callInfo";
import PriceInfo from "../screens/priceInfo";
import PutInfo from "../screens/putInfo";

const screens ={
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <HeaderNative/>
        }
    },
    // CallInfo:{
    //     screen: CallInfo
    // },
    // PriceInfo:{
    //     screen: PriceInfo
    // },
    // PutInfo:{
    //     screen: PutInfo
    // }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);