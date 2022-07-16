import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { InfoContext } from '../store';


export default function CallOption(){

    const {priceData, callData} = React.useContext(InfoContext);

    const [price, setPrice] = priceData;
    const [call, setCall] = callData;

    const [curr, setCurr] = useState(0);
    const [delta, setDelta] = useState(0);
    const [gamma, setGamma] = useState(0);

    let newCE = 0;
    let newDiff = 0;

    const readCurrent = (val) =>{
        setCurr(parseInt(val));
    };

    const readDelta = (val) =>{
        setDelta(parseFloat(val));
    };

    const readGamma = (val) =>{
       setGamma(parseFloat(val)); 
    };

    const calcExpected = () =>{
        newCE = ((price.value) * ((delta)+(gamma))) + (curr)
        console.log(newCE);
        const newCall = {
            ...call,
            expected: newCE.toFixed(2),
        };
        setCall(newCall);
    };

    const calcDiff = () =>{
        newDiff = call.expected - curr;
        const newCall = {
            ...call,
            value: newDiff.toFixed(2),
        };
        setCall(newCall);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Call Information</Text>
            <ScrollView horizontal={true} bounces={true}>            
                <View style={styles.info}>
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Current Price</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={readCurrent}
                        placeholder='Enter a value'
                        keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Current Gamma</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={readGamma}
                        placeholder='Enter a value'
                        keyboardType='numeric' 
                        />
                    </View>
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Current Delta</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={readDelta}
                        placeholder='Enter a value'
                        keyboardType='numeric' 
                        />
                    </View>
                    <TouchableOpacity onPress={calcExpected}>
                        <View style={styles.shell}>
                            <Text style = {styles.contentText}>Call Expected</Text>
                            {call.expected == 0 ? <Text style = {styles.result}>...</Text> : <Text style = {styles.result}>{call.expected}</Text>}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={calcDiff}>
                        <View style={styles.shell}>
                            <Text style = {styles.contentText}>Call Diff</Text>
                            {call.value == 0 ? <Text style = {styles.result}>...</Text> : <Text style = {styles.result}>{call.value}</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        borderBottomWidth: 1
    },
    title:{
        paddingTop: 10,
        paddingLeft: 10,
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        fontWeight: 'bold',

    },
    info:{
        flex: 1,
        flexDirection: 'row',
    },
    shell:{
        height: 55,
        width: 120,
        backgroundColor: '#fff',  
        marginTop: 10,      
        marginRight: 40,
        marginLeft: 20,
        borderRadius: 10, 
        elevation: 3,
        padding: 2
    },
    input:{
        textAlign: 'center',
    },
    contentText:{
        textAlign: 'center',
        fontSize: 15
    },
    result:{
        textAlign: 'center',
    }
});