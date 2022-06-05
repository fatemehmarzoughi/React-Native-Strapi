import React from 'react';
import { 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Modal
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
    xlgSpace,
    linkColor
} from '../constants/general';
import { BASE_URL } from 'react-native-dotenv';
import PopUpModal from './pop-up-modal';
import { generalStyles } from '../constants/styles/general-styles';

export default class Card extends React.Component{

    constructor(){
        super();
        this.state = {
            openModal: false
        }
    }

    openModal = () => {
        this.setState({
            openModal: true,
        })
    }

    closeModal = () => {
        this.setState({
            openModal: false,
        })
    }


    render(){
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
               <View style={[generalStyles.row]}>
                  <Text style={[styles.content ,styles.subTitle2]}>{this.props.item.attributes.createdAt}</Text>
                  <Text 
                     style={[styles.content, styles.link]}
                     onPress={() => this.openModal()}
                  >About the Author</Text>
               </View>
               <PopUpModal 
                 openModal={this.state.openModal}
                 closeModal={this.closeModal}
                 item={this.props.item}
               />
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
  link: {
      fontSize: smFont,
      color: linkColor,
  },
  image: {
      width: windowWidth/1.19,
      height: 200,
      borderRadius: 10,
      marginBottom: xlgSpace,
      marginLeft: 'auto',
      marginRight: 'auto',
  },

})