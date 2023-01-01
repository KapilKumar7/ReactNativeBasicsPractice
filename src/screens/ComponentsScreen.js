import React from 'react'
import{Text,StyleSheet,View} from 'react-native'

const ComponentsScreen = () => {
    const name='Kapil';
  
    return (
    <View>
    <Text style={styles.textStyle} >Getting started with react native</Text>
    <Text style={{fontSize:20}} >My name is {name}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:45,
        marginTop:100
        
    }
})



export default ComponentsScreen