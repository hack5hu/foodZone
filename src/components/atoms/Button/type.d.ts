import {ViewStyle,StyleProp,TextStyle} from 'react-native'
export type Props = {
  text: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};