/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  windowWidth,
  bgColorLight,
  contentColorDark,
  bgColorDark,
  contentColorLight,
  xlgFont,
  midFont,
} from '../constants/general';
import {generalStyles} from '../constants/styles/generalStyles';
import axios from '../core/_axios';
import {BASE_URL} from 'react-native-dotenv';

/* -------------------------------------------------------------------------- */
/*                                 PopUp Modal                                */
/* -------------------------------------------------------------------------- */
export default class PopUpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      authorInfo: {},
      imageURL:
        'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    };
  }
/* --------------------------------- Methods -------------------------------- */
  getAuthorData = async () => {
    const {item} = this.props;
    if (item.attributes.author.data != null) {
      const author = await axios.get(
        `/api/writers/${item.attributes.author.data.id}?populate=*`,
      );
      this.setState({
        authorInfo: author.data.data.attributes,
        imageURL:
          BASE_URL + author.data.data.attributes.picture.data.attributes.url,
      });
    }
  };

  async componentDidMount() {
    await this.getAuthorData();
  }
/* --------------------------------- Render --------------------------------- */
  render() {
    const {openModal, closeModal} = this.props;
    return (
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <TouchableOpacity
          onPress={() => closeModal()}
          style={[generalStyles.center, styles.modalStyle]}>
          <View style={[generalStyles.center]}>
            <Image style={styles.image} source={{uri: this.state.imageURL}} />
            <Text style={styles.title} onPress={() => closeModal()}>
              {this.state.authorInfo.name ?? 'The Author is Unknown'}
            </Text>
            <Text style={styles.subTitle}>{this.state.authorInfo.email}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
  modalStyle: {
    width: windowWidth / 1.19,
    height: windowWidth,
    backgroundColor: bgColorLight,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 12,
    borderColor: contentColorDark,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  modalBg: {
    backgroundColor: bgColorDark,
  },
  title: {
    color: contentColorLight,
    fontSize: xlgFont,
    marginBottom: 5,
  },
  subTitle: {
    color: contentColorDark,
    fontSize: midFont,
  },
  image: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    borderRadius: 8,
    marginBottom: 20,
  },
});
