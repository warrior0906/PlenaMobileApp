import {StyleProp, ViewStyle} from 'react-native';

export interface IRowViewInterface {
  title: string;
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
}
