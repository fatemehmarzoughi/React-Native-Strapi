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
            <View style={[
                generalStyles.center, 
                {
                    height: this.props.height == 'sm' ? 70 : windowHeight,
                    paddingBottom: this.props.height == 'sm' ? 0 : statusBarHeight,
                    backgroundColor: this.props.backgroundColor ?? bgColorDark,
                }
            ]}>
                <Text style={{color: 'white'}}>Loading</Text>
            </View>
        )
    }
}
