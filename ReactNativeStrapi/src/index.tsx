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
import axios from './core/_axios';
import { bgColorDark, statusBarHeight } from './constants/general'
import Card from './components/card'

export default class Main extends React.Component{

  constructor(){
    super();
    this.state={
      data: []
    }
  }

  async componentDidMount(){
    const articles = await axios.get('/api/articles')
    this.setState({
      data: articles.data.data
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Card item={item} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: statusBarHeight,
    backgroundColor: bgColorDark,
  },
})