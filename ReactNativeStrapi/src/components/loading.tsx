/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { Component } from 'react';
import { Text, View } from "react-native";
import { generalStyles } from '@src/constants/styles/generalStyles';
import {
    statusBarHeight,
    bgColorDark,
    windowHeight,
} from '@src/constants/general';

/* ------------------------------- Props Type ------------------------------ */
type Props = {
    height?: string,
    backgroundColor?: string,
}

/* ------------------------------- States Type ------------------------------ */
type States = {}

/* -------------------------------------------------------------------------- */
/*                                   Loading                                  */
/* -------------------------------------------------------------------------- */
export default class Loading extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
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
