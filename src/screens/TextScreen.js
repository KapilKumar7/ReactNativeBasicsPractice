import {React,useState} from 'react'
import{Text,StyleSheet,View, Button,TextInput} from 'react-native'

const TextScreen = () => {

    const [name,setName]=useState('')
  return (
    <View>
        <Text>Enter your Name</Text>
       <TextInput
       style={styles.input}
       autoCapitalize='none'
       autoCorrect={false}
       value={name}
       onChangeText={val => setName(val)}
       />
        <Text>My name is  :{name}</Text>
        {name.length<5 && name.length>0? < Text>Password must be greater than 5 character</Text> :null}
    </View>
  )
}

const styles =StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:2
    }
})

export default TextScreen