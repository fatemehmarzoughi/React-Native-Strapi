import React from 'react';
import { 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    windowWidth,
    windowHeight,
    bgColorDark,
    bgColorLight,
    contentColorLight,
    contentColorDark,
    statusBarHeight,
    smSpace,
    lgSpace,
    smFont,
    xlgFont,
    midFont,
    xlgSpace
} from '../constants/general'
import { BASE_URL } from 'react-native-dotenv'

export default class Card extends React.Component{
    render(){
        console.log('this.props.item.attributes.image = ')
        console.log(this.props.item.attributes.image.data.attributes.url)
        return(
            <TouchableOpacity style={styles.card}>
               <Image 
                  style={styles.image}
                  source={{
                      uri: BASE_URL + this.props.item.attributes.image.data.attributes.url
                  }} 
                />
               <Text style={[styles.content ,styles.title]}>{this.props.item.attributes.title}</Text>
               <Text style={[styles.content ,styles.subTitle]}>{this.props.item.attributes.description}</Text>
               <Text style={[styles.content ,styles.subTitle2]}>{this.props.item.attributes.createdAt}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  card: {
      marginRight: smSpace,
      marginLeft: smSpace,
      marginBottom: smSpace,
      marginTop: smSpace,
      padding: lgSpace,
      backgroundColor: bgColorLight,
      borderRadius: 20
  },
  content: {
      color: contentColorLight,
      marginBottom: smSpace
  },
  title: {
      fontSize: xlgFont,
      marginBottom: smSpace
  },
  subTitle: {
      fontSize: midFont,
  },
  subTitle2: {
      fontSize: smFont,
      color: contentColorDark
  },
  image: {
      width: windowWidth/1.5,
      height: 200,
      borderRadius: 10,
      marginBottom: xlgSpace,
      marginLeft: 'auto',
      marginRight: 'auto',
  }
})