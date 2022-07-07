import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


import HeaderNative from '../components/header';
import OptionsNative from '../components/options';
import { InfoContext } from '../store';

export default function Home({navigation}) {

  const { priceData, callData, putData } = React.useContext(InfoContext);

  const [price, setPrice] = priceData;
  const [call, setCall] = callData;
  const [put, setPut] = putData;

  // const pressHandler = (item) =>{

  //   console.log(item);
  //   if (item.key == 1){
  //     navigation.navigate('PriceInfo');
  //   }
  //   else if (item.key == 2){
  //     navigation.navigate('CallInfo');
  //   }
  //   else{
  //     navigation.navigate('PutInfo');
  //   }
  // }
                                      
  return (
    <View style={styles.container}>
      <HeaderNative/>
      <View style={styles.content}>
        {/* <View style={styles.list}>

          <OptionsNative item={price} pressHandler={pressHandler} />
          <OptionsNative item={call} pressHandler={pressHandler} />
          <OptionsNative item={put} pressHandler={pressHandler} />

          
        </View> */}
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // content:{
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // list:{
  //   marginTop: 30,
  // },
});
