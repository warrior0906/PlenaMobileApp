import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../assets/icons';
import {ITouchableIconInterface} from './touchableIcon.interface';
import {touchableIconStyles} from './touchableIcon.styles';

const TouchableIcon = ({name, onPress, number}: ITouchableIconInterface) => {
  const styles = touchableIconStyles();

  const icon: any = icons[name as keyof typeof icons];

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      {number ? (
        <View style={styles.numberView}>
          <Text style={styles.number}>{number}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default TouchableIcon;
