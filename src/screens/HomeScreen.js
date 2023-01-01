import React from "react";
import { Text,View,Button, StyleSheet ,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
      onPress={()=>navigation.navigate('Components')}
      title="Go to component " />
      <TouchableOpacity onPress={()=>navigation.navigate("ImageScreen")} >  
        <Text> Go to ImageScreen</Text>
      </TouchableOpacity>

      <Button 
      onPress={()=>navigation.navigate('List')}
      title="List " />
      <Button 
      onPress={()=>navigation.navigate('Counter')}
      title="Counter " />
      <Button 
      onPress={()=>navigation.navigate('Colours')}
      title="Colours Screen " />
      <Button 
      onPress={()=>navigation.navigate('Square')}
      title="Square Screen " />
      <Button 
      onPress={()=>navigation.navigate('Text')}
      title="Text Screen " />
      <Button 
      onPress={()=>navigation.navigate('Box')}
      title="Box Screen " />
    </View>
    
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
