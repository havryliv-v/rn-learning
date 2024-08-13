import React, {useRef} from 'react';
import {View, Animated, PanResponder, StyleSheet} from 'react-native';

export const AnimatedComponent = () => {
  const position = useRef<any>(new Animated.ValueXY()).current;
  const twirl = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        position.setOffset({
          x: position.x._value,
          y: position.y._value,
        });
        position.setValue({x: 0, y: 0});
        twirl.setValue(0);
      },
      onPanResponderMove: Animated.event(
        [null, {dx: position.x, dy: position.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, gestureState) => {
        position.flattenOffset();

        Animated.sequence([
          // decay, then spring to start and twirl
          Animated.decay(position, {
            // coast to a stop
            velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
            deceleration: 0.997,
            useNativeDriver: true,
          }),
          Animated.parallel([
            // after decay, in parallel:
            Animated.spring(position, {
              toValue: {x: 0, y: 0}, // return to start
              useNativeDriver: true,
            }),
            Animated.timing(twirl, {
              // and twirl
              toValue: 360,
              useNativeDriver: true,
            }),
          ]),
        ]).start(); // start the sequence group
      },
    }),
  ).current;

  const rotate = twirl.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.box,
          {
            transform: [
              {translateX: position.x},
              {translateY: position.y},
              {rotate},
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
});
