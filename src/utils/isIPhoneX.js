import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// https://kapeli.com/cheat_sheets/iOS_Design.docset/Contents/Resources/Documents/index
// this code is very stupid but.. yeah..
const isIPhoneX = Platform.OS === 'ios' && width === 375 && height === 812; // 5.8"
const isIPhone11 = Platform.OS === 'ios' && width === 414 && height === 896; // 6.5"
export default isIPhoneX || isIPhone11;
