import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { InfoContext } from '../store';

export default function PutInfo({navigation}){
    const {priceData, callData, putData} = React.useContext(InfoContext);

    const [price, setPrice] = priceData;
    const [put, setPut ] = putData;

    const [curr, setCurr] = useState(0);
    const [delta, setDelta] = useState(0);
    const [gamma, setGamma] = useState(0);
    
    let newCE = 0;
    let newDiff = 0;

    const calcExpected = () =>{
        // console.log("calc expected called");
        newCE = ((price.value) * ((delta)+(gamma))) + (curr)
        const newPut = {
            ...put,
            expected: newCE.toFixed(2),
        };
        setPut(newPut);
        // console.log("callexpected "+call.expected);
    }

    const calcDiff = () =>{
        // console.log("calc diff called");
        newDiff = put.expected - curr;
        // console.log("newDiff: "+newDiff);
        const newPut = {
            ...put,
            value: newDiff.toFixed(2),
        };
        setPut(newPut);
        // console.log(call.value);
    }

    const readCurrent = (val) =>{
        setCurr(parseInt(val));
    }

    const readDelta = (val) =>{
        setDelta(parseFloat(val));
    }

    const readGamma = (val) =>{
        setGamma(parseFloat(val));
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
 
                <Text style={styles.display}>Expected Put:</Text>
                <Text style={styles.display}>{put.expected}</Text>
                <Text style={styles.display}>Put Difference:</Text>
                <Text style={styles.display}>{put.value}</Text>
                <TextInput
                    style={styles.dataInput}
                    onChangeText={readCurrent}
                    placeholder="Current Price"
                    keyboardType='numeric'
                />

                <TextInput
                    style={styles.dataInput}
                    onChangeText={readDelta}
                    placeholder="Delta"
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.dataInput} 
                    onChangeText={readGamma}
                    placeholder="Gamma"
                    keyboardType='numeric'
                />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={calcExpected}>
                        <Text style={styles.Calculate}>Calculate Expected</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={calcDiff}>
                        <Text style={styles.Calculate}>Calculate Difference</Text>
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
    Calculate:{
        borderColor: 'blue',
        padding: 16,
        marginTop: 16,
        borderRadius: 20,
        fontSize: 20,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },
    buttonWrapper:{
        paddingHorizontal: 20

    }
});