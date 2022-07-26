/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {
  windowWidth,
  bgColorLight,
  contentColorLight,
  contentColorDark,
  smSpace,
  lgSpace,
  smFont,
  xlgFont,
  midFont,
  xlgSpace,
  linkColor,
} from '../../constants/general';
import PopUpModal from '../popUpModal/popUpModal';
import {generalStyles} from '../../constants/styles/generalStyles';
import { Post } from '../../core/types/entities';
import { AuthorStates } from '../../reducers/author';
import { BASE_URL } from 'react-native-dotenv';
import { Attribute } from '../../core/types/general';

/* ------------------------------- Props Type ------------------------------- */
type Props = {
  item: Attribute,
  getPostAuthor: Function,
  AuthorStates: AuthorStates,
}

/* ------------------------------- States Type ------------------------------ */
type States = {
  openModal: boolean,
}

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */
export default class Card extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  /* --------------------------------- Methods -------------------------------- */

  openModal = async () => {
    await this.props.getPostAuthor(this.props.item)
    this.setState({
      openModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };

  /* --------------------------------- Render --------------------------------- */
  render() {
    const post = this.props.item.attributes as Post;
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: BASE_URL + post.image.data.attributes.url
          }}
        />
        <Text style={[styles.content, styles.title]}>
          {post.title}
        </Text>
        <Text style={[styles.content, styles.subTitle]}>
          {post.description}
        </Text>
        <View style={[generalStyles.row]}>
          <Text style={[styles.content, styles.subTitle2]}>
            {post.date}
          </Text>
          <Text
            style={[styles.content, styles.link]}
            onPress={() => this.openModal()}>
            About the Author
          </Text>
        </View>
        <PopUpModal
          openModal={this.state.openModal}
          closeModal={this.closeModal}
          item={this.props.item}
          AuthorStates={this.props.AuthorStates}
        />
      </TouchableOpacity>
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
  card: {
    marginRight: smSpace,
    marginLeft: smSpace,
    marginBottom: smSpace,
    marginTop: smSpace,
    padding: lgSpace,
    backgroundColor: bgColorLight,
    borderRadius: 20,
  },
  content: {
    color: contentColorLight,
    marginBottom: smSpace,
  },
  title: {
    fontSize: xlgFont,
    marginBottom: smSpace,
  },
  subTitle: {
    fontSize: midFont,
  },
  subTitle2: {
    fontSize: smFont,
    color: contentColorDark,
  },
  link: {
    fontSize: smFont,
    color: linkColor,
  },
  image: {
    width: windowWidth / 1.19,
    height: 200,
    borderRadius: 10,
    marginBottom: xlgSpace,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
