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
} from '../../constants/general';
import { generalStyles } from '../../constants/styles/generalStyles';
import { BASE_URL } from 'react-native-dotenv';
import Loading from '../loading';

/* -------------------------------------------------------------------------- */
/*                                 PopUp Modal                                */
/* -------------------------------------------------------------------------- */
export default class PopUpModal extends React.Component {
/* ------------------------------- Constructor ------------------------------ */
  constructor() {
    super();
  }
/* --------------------------------- Render --------------------------------- */
  render() {
    const { openModal, closeModal } = this.props;
    const { loading, error, authorInfo, imageURL } = this.props.AuthorStates;
    return (
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <TouchableOpacity
          onPress={() => closeModal()}
          style={[generalStyles.center, styles.modalStyle]}>
            {loading ? (
              <Loading height="sm" backgroundColor={bgColorLight} />
            ) : (
              error ? (
                <Text style={{color: 'red'}}>An Error Accured</Text>
              ) : (
                <View style={[generalStyles.center]}>
                  <Image style={styles.image} source={{uri: imageURL}} />
                  <Text style={styles.title} onPress={() => closeModal()}>
                    {authorInfo.name ?? 'The Author is Unknown'}
                  </Text>
                  <Text style={styles.subTitle}>{authorInfo.email}</Text>
                </View>
              )
            )}
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
