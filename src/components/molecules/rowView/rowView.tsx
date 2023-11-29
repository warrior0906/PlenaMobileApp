import React from 'react';
import {Text, View} from 'react-native';
import {IRowViewInterface} from './rowView.interface';
import {rowViewStyles} from './rowView.styles';

const RowView = ({title, value, containerStyle}: IRowViewInterface) => {
  const styles = rowViewStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default RowView;
