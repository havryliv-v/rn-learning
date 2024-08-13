import React, {useState} from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export const LayoutAnimationComponent = () => {
  // changed to export
  const [dimensions, setDimensions] = useState({w: 100, h: 100});

  const onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    setDimensions({
      w: dimensions.w + 15,
      h: dimensions.h + 15,
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, {width: dimensions.w, height: dimensions.h}]} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// No changes needed for styles, just keeping it for reference
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
