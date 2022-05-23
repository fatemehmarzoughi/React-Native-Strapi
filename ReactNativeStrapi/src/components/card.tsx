import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Dimensions, 
    FlatList, 
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import {
    windowWidth,
    bgColorDark,
    bgColorLight,
    contentColorLight,
    contentColorDark,
    statusBarHeight,
    smSpace,
    lgSpace,
    smFont,
    xlgFont,
    midFont
} from '../constants/general'

export default class Card extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.card}>
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
  }
})