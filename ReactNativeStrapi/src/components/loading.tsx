/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { generalStyles } from '../constants/styles/generalStyles';
import {
    statusBarHeight,
    bgColorDark,
    windowHeight,
} from '../constants/general.ts'

/* -------------------------------------------------------------------------- */
/*                                   Loading                                  */
/* -------------------------------------------------------------------------- */
export default class Loading extends Component {
    constructor() {
        super();
        this.state = {}
    }
    /* ---------------------------------- Render --------------------------------- */
    render(){
        return(
            <View style={[generalStyles.center, styles.container]}>
                <Text style={{color: 'white'}}>Loading</Text>
            </View>
        )
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        paddingBottom: statusBarHeight,
        backgroundColor: bgColorDark,
    }
})