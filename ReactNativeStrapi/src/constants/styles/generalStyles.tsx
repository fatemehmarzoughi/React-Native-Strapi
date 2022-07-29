import { StyleSheet } from 'react-native';
import { 
  contentColorLight, 
  danger, 
  lgFont, 
  linkColor, 
  smSpace, 
  xlgFont, 
  xxlgFont 
} from '../general';

export const generalStyles = StyleSheet.create({
  row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
  },
  center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  col: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column'
  },
  title: {
    fontSize: xxlgFont,
    marginBottom: smSpace,
    color: contentColorLight,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: lgFont,
    marginBottom: smSpace,
    color: danger,
  },
  linkText: {
    fontSize: xlgFont,
    marginBottom: smSpace,
    color: linkColor,
  }
})