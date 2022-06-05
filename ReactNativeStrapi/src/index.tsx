import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Dimensions, 
    FlatList, 
    StatusBar,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import axios from './core/_axios';
import { 
  bgColorDark, 
  statusBarHeight, 
  contentColorDark, 
  contentColorLight, 
  xxlgFont, 
  smSpace,
} from './constants/general'
import Card from './components/card'

export default class Main extends React.Component{

  constructor(){
    super();
    this.state={
      data: [],
      refreshing: false,
    }
  }

  getArticles = async () => {
    this.setState({
      refreshing: true
    })
    const articles = await axios.get('/api/articles?populate=*')
    this.setState({
      data: articles.data.data,
      refreshing: false,
    })
  }

  async componentDidMount(){
    await this.getArticles();
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Blogs</Text>
        <FlatList 
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getArticles}
              tintColor= {contentColorDark}
            />
          }
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
  title: {
      fontSize: xxlgFont,
      marginBottom: smSpace,
      color: contentColorLight,
      fontWeight: 'bold'
  },
})