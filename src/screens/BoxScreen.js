import React from 'react'
import{Text,StyleSheet,View, Button,FlatList} from 'react-native'

const BoxScreen = () => {
  return (

    <View style={styles.viewStyle} >

    <View style={styles.text1Style}></View>
    <View style={styles.text2Style}></View>
    <View style={styles.text3Style}></View>
    </View>
  )
}

const styles =StyleSheet.create({

    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        alignItems:'flex-start',
        flexDirection:'row',  
        justifyContent:'space-between',      
        height:200,
        
       
        
    },
    textStyle:{
        borderWidth:1,
        borderColor:'teal',
        margin:10,
        padding:20,
        borderWidth:5,
        borderColor:'pink',
        borderRadius:100,

        
        
    },
    text1Style:{
     width:100,
     height:100,
     backgroundColor:'green'      
        
    },
    text2Style:{
        width:100,
        height:100,
        backgroundColor:'blue'   ,
        marginTop:100
          
           

        
        
    },
    text3Style:{
        width:100,
        height:100,
        backgroundColor:'red'    
            
              
        
    },
})

export default BoxScreen
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/KapilKumar7/ReactNativeBasicsPractice.git
// git push -u origin main