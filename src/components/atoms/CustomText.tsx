import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = ({ children, style, color}) => {
  return <Text style={[style, {...styles.customText, color}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  customText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Nunito-Black'
  }
})
export default CustomText;
