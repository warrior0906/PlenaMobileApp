import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import icons from '../../../assets/icons';
import {ITouchableIconInterface} from './touchableIcon.interface';
import {touchableIconStyles} from './touchableIcon.styles';

const TouchableIcon = ({name, onPress}: ITouchableIconInterface) => {
  const styles = touchableIconStyles();

  const icon: any = icons[name as keyof typeof icons];

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
