import {React,useState} from 'react'
import{Text,StyleSheet,View, Button,FlatList} from 'react-native'

const ColourScreen = () => {
    let [colours,setColours]=useState([]);
    // console.log(colours)
  return (
    <View>
<Button title='Add a colour'
onPress={()=>{
    setColours([...colours,randomRgb()])
}}
/>
<FlatList
keyExtractor={item=>item}
data={colours}
renderItem={({item})=>{
    console.log(item)
    return(<View
        style={{height:100,backgroundColor:item}}
    />)
}}
/>


    </View>
  )
} 
const randomRgb=()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`
}

const styles=StyleSheet.create({

})
export default ColourScreen