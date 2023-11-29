import {StyleProp, ViewStyle} from 'react-native';

export interface ITouchableIconInterface {
  name: string;
  onPress: () => void;
  number?: number;
  containerStyle?: StyleProp<ViewStyle>;
}
