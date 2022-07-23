import React, { useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { InfoContext } from '../store';


export default function PriceOption(){
    const {priceData} = useContext(InfoContext);
    const [currentPrice, setCurr] = useState(0);
    const [expectedPrice, setExp] = useState(0);
    const [diffPrice, setPrice] = priceData;

    const [inputChange, setChange] = useState(false);

    const readCurrent = (val) =>{
        setCurr(parseFloat(val));
        setChange(true);
    };

    const readExpected = (val) =>{
        setExp(parseFloat(val));
        setChange(true);
    };

    const calcDiff = () =>{
        let newPD = expectedPrice-currentPrice;
        const newPrice ={
            ...diffPrice,
            value: newPD.toFixed(2),
        };
        setPrice(newPrice);
    };

    useEffect(() =>{
        const interval = setInterval(()=> {
            calcDiff();
        }, 100);
        return()=>clearInterval(interval);
    });
    
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
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Price Diff</Text>
                        {diffPrice.value == 0 ? <Text style = {styles.result}>...</Text> : <Text style = {styles.result}>{diffPrice.value}</Text>}
                    </View>
                    
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