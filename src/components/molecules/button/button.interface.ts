import {StyleProp, ViewStyle} from 'react-native';

export interface IButtonInterface {
  title: string;
  onPress: () => void;
  variant: 'Outlined' | 'Filled';
  containerStyle?: StyleProp<ViewStyle>;
}
