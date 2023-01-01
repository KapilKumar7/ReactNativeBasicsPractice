import {React,useState} from 'react'
import{Text,StyleSheet,View, Button,FlatList} from 'react-native'

const ColourCounter = ({color,onIncrease,onDecrease}) => {
  return (
   <View>
    <Text>{color}</Text>
    <Button onPress={()=>onIncrease()}  title={`Increase ${color}`}/>
    <Button onPress={()=>onDecrease()}  title={`Decrease ${color}`}/>
   </View>
  )
}

export default ColourCounter