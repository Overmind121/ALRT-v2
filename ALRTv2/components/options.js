import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OptionsNative({item, pressHandler}){


    return(
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <View style={styles.infoContainer}>
                <Text style={styles.item}>{item.text}</Text>
                <Text style={styles.item}>D: {item.value}</Text>
                {item.key > 1 ? <Text style={styles.item}>E: {item.expected}</Text> : null}
            </View>
        </TouchableOpacity>
    );
   
}

const styles = StyleSheet.create({
    infoContainer:{
        padding: 20,
        margin: 14,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item:{
        fontSize: 20,
        padding: 10
    }

})