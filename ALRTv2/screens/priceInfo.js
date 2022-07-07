import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { InfoContext } from '../store';

export default function PriceInfo({navigation}){
    const {priceData, callData, putData} = React.useContext(InfoContext);

    const [price, setPrice] = priceData;
    // const[call, setCall] = callData;
    // const[put, setPut] = putData;

    const [currentPrice, setCurr] = useState(0);
    const [expectedPrice, setExp] = useState(0);


    const calcDiff = () =>{
        //console.log("Current: "+currentPrice);
        //console.log("expected: "+expectedPrice);
        let newPD = expectedPrice-currentPrice;
        const newPrice = {
            ...price,
            value: newPD,
        };
        setPrice(newPrice);
        //console.log(global.priceInfoVal);
    }
    
    const readCurrent = (val) =>{
        setCurr(parseInt(val));
        //console.log("current price has changed to:");
        //console.log(currentPrice);
    }
    
    
    const readExpected = (val) =>{
        setExp(parseInt(val));
        //console.log(expectedPrice);
    }
    
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={StyleSheet.container}>
                <Text style={styles.display}>Price Difference:</Text>
                <Text style={styles.display}>{price.value}</Text>
                <TextInput
                    style={styles.dataInput}
                    onChangeText={readCurrent}
                    placeholder="Current Price"
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.dataInput}
                    onChangeText={readExpected}
                    placeholder="Expected Price"
                    keyboardType='numeric'
                />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={calcDiff}>
                        <Text style={styles.Calculate}>Calculate Diff</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
} 

const styles = StyleSheet.create({
    container:{
        padding: 24,
        flex: 1,
        backgroundColor: "#E8EAED"
    },
    display:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    dataInput:{
        width: "100%",
        padding: 10,
        height: 60,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20

    },
    Calculate: {
        borderColor: 'blue',
        padding: 16,
        marginTop: 16,
        borderRadius: 20,
        fontSize: 20,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonWrapper:{
        paddingHorizontal: 20

    }
});