import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import CallInfo from "../screens/callInfo";
import PriceInfo from "../screens/priceInfo";
import PutInfo from "../screens/putInfo";

const screens ={
    Home: {
        screen: Home
    },
    CallInfo:{
        screen: CallInfo
    },
    PriceInfo:{
        screen: PriceInfo
    },
    PutInfo:{
        screen: PutInfo
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);