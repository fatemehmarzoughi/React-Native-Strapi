import { 
    StatusBar,
    Dimensions
} from 'react-native';

// Spaces
export const statusBarHeight = StatusBar.currentHeight + 80;
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const smSpace = 10;
export const lgSpace = 20;

// Colors
export const bgColorLight = '#14152c';
export const bgColorDark = '#000019';
export const contentColorLight = '#fff';
export const contentColorDark = 'gray';

// Font sizes
export const smFont = 15;
export const midFont = 18;
export const lgFont = 20;
export const xlgFont = 25;