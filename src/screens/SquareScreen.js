import {React,useReducer} from 'react'
import{Text,StyleSheet,View, Button,FlatList} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const reducer=(state ,action) =>{

  switch(action.type){

    case 'red':
      return state.red+action.payload<0 || state.red+action.payload > 256 ? state : {...state , red :state.red+action.payload }
      
      case 'green':
        return state.green+action.payload<0 || state.green+action.payload > 256 ? state : {...state , green :state.green+action.payload }
        
        case 'blue':
        return state.blue+action.payload<0 || state.blue+action.payload > 256 ? state : {...state , blue :state.blue+action.payload }
      default : return state;
  }
}

const INCREMENT_COLOUR=15;
const SquareScreen = () => {
const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
const {red,green,blue}=state;
  return (
   <View>
    <ColourCounter  
    onIncrease={()=>dispatch({type:'red',payload:INCREMENT_COLOUR})}
    onDecrease={()=>dispatch({type:'red' ,payload:-1*INCREMENT_COLOUR})}
    color="Red" />
    <ColourCounter 
     onIncrease={()=>dispatch({type:'blue',payload:INCREMENT_COLOUR})}
     onDecrease={()=>dispatch({type:'blue' ,payload:-1*INCREMENT_COLOUR})}
     
     color="Blue" />
    <ColourCounter
     onIncrease={()=>dispatch({type:'green',payload:INCREMENT_COLOUR})}
     onDecrease={()=>dispatch({type:'green' ,payload:-1*INCREMENT_COLOUR})}
  
    color="Green" />

    <View style={{height:200,borderRadius:100 ,backgroundColor:`rgb(${red},${green},${blue})` }}  />
 
  
   </View>
  )
}

export default SquareScreen