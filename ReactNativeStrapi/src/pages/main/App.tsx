/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import {
  bgColorDark,
  statusBarHeight,
  contentColorDark,
  windowHeight,
  lgSpace,
  bgColorLight,
  lgRadius,
  windowWidth,
  smSpace,
  xlgSpace,
} from "@src/constants/general";
import { generalStyles } from "@src/constants/styles/generalStyles";
import Card from '@src/components/card';
import Loading from "@src/components/loading";
import { PostStates } from '@src/reducers/posts';
import { GlobalStates } from '@src/reducers/global';


/* ------------------------------- Props type ------------------------------- */
type Props = {
  PostsStates: PostStates,
  getAllPosts: (dispatch: any) => Promise<void>,
  setLanguageToFa: () => void,
  setLanguageToEn: () => void,
  locale: string,
};

/* ------------------------------- States Type ------------------------------ */
type States = {
  refreshing: boolean,
  openModal: boolean,
}

/* -------------------------------------------------------------------------- */
/*                            Main Class Component                            */
/* -------------------------------------------------------------------------- */
export default class Main extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
      openModal: false,
    };
  }

  /* --------------------------------- Methods -------------------------------- */
  getArticles = async () => {
    this.setState({
      refreshing: true,
    });
    await this.props.getAllPosts(this.props.locale)
    this.setState({
      refreshing: false,
    });
  };

  async componentDidMount() {
    await this.getArticles();
  }

  setLanguage = async () => {
    console.log(this.props.locale)
    if(this.props.locale === 'en') {
      this.props.setLanguageToFa();
    } else {
      this.props.setLanguageToEn();
    }
    await this.getArticles();
  }

  /* --------------------------------- Render --------------------------------- */
  render() {
    const { posts, loading } = this.props.PostsStates;
    return (
      <View style={[styles.container, generalStyles.center]}>
        <View style={[styles.header, generalStyles.row]}>
          <Text 
            onPress={this.setLanguage}
            style={[generalStyles.linkText]}>{this.props.locale === 'en' ? 'Fa': 'En'}</Text>
          <Text style={generalStyles.title}>Blogs</Text>
          <Text style={{opacity: 0}}>Fa</Text>
        </View>
        {loading ? (
          <Loading />
        ) : (
          posts.length == 0 ? (
            <View style={[styles.errorContainer, generalStyles.center]}>
              <Text style={generalStyles.errorText}>Error Loading Content</Text>
              <Text 
                style={styles.simpleButton}
                onPress={this.getArticles}
              >Refresh</Text>
            </View>
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
              renderItem={
                ({item}) => <Card item={item} />
              }
            />
          )
        )}
      </View>
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: bgColorDark,
    height: windowHeight,
  },
  errorContainer: {
    height: windowHeight - statusBarHeight,
    backgroundColor: bgColorDark,
  },
  simpleButton: {
    color: 'white',
    padding: lgSpace,
    backgroundColor: bgColorLight,
    borderRadius: lgRadius,
  },
  header: {
    width: windowWidth - xlgSpace,
  }
});

