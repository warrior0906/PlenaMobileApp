import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonInterface} from './button.interface';
import {buttonStyles} from './button.styles';

const Button = ({title, onPress, variant}: IButtonInterface) => {
  const styles = buttonStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        variant === 'Filled' ? styles.filledContainer : null,
      ]}>
      <Text
        style={[
          styles.title,
          variant === 'Filled' ? styles.filledTitle : null,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
