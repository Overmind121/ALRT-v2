import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PriceOption(){
    return(
        <View>
            <Text style={styles.title}>Price Information</Text>
            <ScrollView horizontal={true}>            
                <View style={styles.info}>
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Current Price</Text>
                        <TextInput />
                    </View>
                    <View style={styles.shell}>
                        <Text style = {styles.contentText}>Expected Price</Text>
                        <TextInput />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.shell}>
                            <Text style = {styles.contentText}>Price Diff</Text>
                            <Text style = {styles.result}>...</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>

            
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 20,
        paddingBottom: 10
    },
    info:{
        flex: 1,
        flexDirection: 'row'
    },
    shell:{
        height: 55,
        width: 150,
        backgroundColor: 'gray',
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5
    },
    contentText:{
        textAlign: 'center',
        fontSize: 15
    },
    result:{
        textAlign: 'center',
    }
});