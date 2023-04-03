import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles'
import CustomText from '../../components/atoms/CustomText';
import Button from '../../components/atoms/Button';
import { colors } from '../../../assets/colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.image} />
      </View>
      <View style={styles.splashTextContainer}>
        <CustomText style={undefined} color={'#FFF'}>The Ultimate Foodcourt</CustomText>
        <CustomText style={undefined} color={'#FFF'}>for Nineleaps</CustomText>
        <CustomText style={undefined} color={'#FFF'}>for Nineleaps</CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={undefined}
          text="Get Started"
          buttonText={styles.buttonText}
          onPress={() => console.log('Button pressed')}
          backgroundColor = {colors.white}
          />
      </View>

    </View>
  )
}

export default SplashScreen;