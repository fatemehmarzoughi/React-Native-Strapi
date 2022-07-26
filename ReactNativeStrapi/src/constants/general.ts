import { 
    StatusBar,
    Dimensions
} from 'react-native';

// Spaces
export const statusBarHeight: number = StatusBar.currentHeight! + 80;
export const windowWidth: number = Dimensions.get('window').width;
export const windowHeight: number = Dimensions.get('window').height;
export const smSpace: number = 10;
export const lgSpace: number = 20;
export const xlgSpace: number = 30;

// Colors
export const bgColorLight: string = '#14152c';
export const bgColorDark: string = '#000019';
export const contentColorLight: string = '#fff';
export const contentColorDark: string = 'gray';
export const linkColor: string = '#097aec';
export const danger: string = 'red';

// Font sizes
export const smFont: number = 15;
export const midFont: number = 18;
export const lgFont: number = 20;
export const xlgFont: number = 25;
export const xxlgFont: number = 35;

// Radius
export const smRadius: number = 5;
export const mdRadius: number = 10;
export const lgRadius: number = 20;