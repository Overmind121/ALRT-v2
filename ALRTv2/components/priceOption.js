import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { InfoContext } from '../store';


export default function PriceOption(){

    const {priceData} = React.useContext(InfoContext);

    const [currentPrice, setCurr] = useState(0);
    const [expectedPrice, setExp] = useState(0);
    const [diffPrice, setPrice] = priceData;

    const readCurrent = (val) =>{
        setCurr(parseInt(val));
    };

    const readExpected = (val) =>{
        setExp(parseInt(val));
    };

    const calcDiff = () =>{
        let newPD = expectedPrice-currentPrice;
        const newPrice ={
            ...diffPrice,
            value: newPD,
        };
        setPrice(newPrice);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Price Information</Text>
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
                        <Text style = {styles.contentText}>Expected Price</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={readExpected}
                        placeholder='Enter a value'
                        keyboardType='numeric' 
                        />
                    </View>
                    <TouchableOpacity onPress={calcDiff}>
                        <View style={styles.shell}>
                            <Text style = {styles.contentText}>Price Diff</Text>
                            {diffPrice.value == 0 ? <Text style = {styles.result}>...</Text> : <Text style = {styles.result}>{diffPrice.value}</Text>}
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
        borderBottomWidth: 2
    },
    title:{
        paddingTop: 20,
        paddingLeft: 10,
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        
    },
    info:{
        flex: 1,
        flexDirection: 'row',


    },
    shell:{
        height: 55,
        width: 150,
        backgroundColor: 'gray',
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5
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