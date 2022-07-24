/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import axios from '../../core/_axios.ts';
import {
  bgColorDark,
  statusBarHeight,
  contentColorDark,
  contentColorLight,
  xxlgFont,
  smSpace,
} from '../../constants/general.ts';
import { generalStyles } from "../../constants/styles/generalStyles";
import Card from '../../components/card';
import Loading from "../../components/loading";

/* -------------------------------------------------------------------------- */
/*                            Main Class Component                            */
/* -------------------------------------------------------------------------- */
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false,
    };
  }

  /* --------------------------------- Methods -------------------------------- */
  getArticles = async () => {
    this.setState({
      refreshing: true,
    });
    await this.props.getAllPosts()
    console.log(this.props.AllPosts)
    this.setState({
      refreshing: false,
    });
  };

  async componentDidMount() {
    await this.getArticles();
  }

  /* --------------------------------- Render --------------------------------- */
  render() {
    const { posts, loading } = this.props.PostsStates;
    return (
      <View style={[styles.container, generalStyles.center]}>
        <Text style={styles.title}>Blogs</Text>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.getArticles}
                tintColor={contentColorDark}
              />
            }
            renderItem={({item}) => <Card item={item} />}
          />
        )}
      </View>
    );
  }
}

/* --------------------------------- Styles --------------------------------- */
const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: bgColorDark,
  },
  title: {
    fontSize: xxlgFont,
    marginBottom: smSpace,
    color: contentColorLight,
    fontWeight: 'bold',
  },
});

