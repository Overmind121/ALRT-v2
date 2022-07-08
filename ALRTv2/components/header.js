import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderNative() {
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>ALRT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        
    }
})