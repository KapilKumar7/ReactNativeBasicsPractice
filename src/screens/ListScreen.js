import React from 'react'
import {Text ,View ,StyleSheet,FlatList} from 'react-native'

const ListScreen = () => {

    const friends =[
        {name:'friend1',age:20},
        {name:'friend2',age:20},
        {name:'friend3',age:20},
        {name:'friend4',age:20},
        {name:'friend5',age:20},
        {name:'friend6',age:20},
        {name:'friend7',age:20}
    ]
  return (
    <FlatList 
   
    keyExtractor={friend=>friend.name}
    data={friends}
    renderItem={({item})=>{
 return <Text style={styles.textStyle} >{item.name} - {item.age}</Text>
    }}
    />
  )
}

const styles=StyleSheet.create({
  textStyle:{
    margin:50
  }
})

export default ListScreen