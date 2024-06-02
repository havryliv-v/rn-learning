import React from 'react';
import {Text, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {styles} from './styles';

const Mask = () => {
  return (
    <MaskedView
      style={styles.maskView}
      maskElement={
        <View style={styles.maskContainer}>
          <Text style={styles.maskText}>Basic Mask</Text>
        </View>
      }>
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View style={[styles.mask, styles.maskOne]} />
      <View style={[styles.mask, styles.maskTwo]} />
      <View style={[styles.mask, styles.maskThree]} />
      <View style={[styles.mask, styles.maskFour]} />
    </MaskedView>
  );
};

export default Mask;
