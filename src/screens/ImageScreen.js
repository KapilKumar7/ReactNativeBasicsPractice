import React from 'react'
import{Text,StyleSheet,View} from 'react-native'
import ImageDetails from '../components/ImageDetails'
const ImageScreen = () => {
  return (
    <View>
        <ImageDetails title="forest" imageScore={1}imageSource={require('../../assets/beach.jpg')} />
        <ImageDetails title="river" imageScore="12" imageSource={require('../../assets/forest.jpg')} />
        <ImageDetails title="mountain" imageScore="20" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
}

export default ImageScreen