import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ImageComponent = () => {
  return (
    <View>
      <Image
        style={[styles.image]}
        source={{
          uri: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
