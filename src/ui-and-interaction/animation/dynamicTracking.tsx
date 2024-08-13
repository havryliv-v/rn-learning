import React, {useRef} from 'react';
import {View, Animated, PanResponder, StyleSheet} from 'react-native';

export const DynamicTracking = () => {
  const leader = useRef<any>(new Animated.ValueXY()).current;
  const follower = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const lastOffset = useRef({x: 0, y: 0}).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        leader.setOffset({x: lastOffset.x, y: lastOffset.y});
        leader.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([null, {dx: leader.x, dy: leader.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        lastOffset.x += leader.x._value;
        lastOffset.y += leader.y._value;
        leader.flattenOffset();

        Animated.spring(follower, {
          toValue: {x: lastOffset.x, y: lastOffset.y},
          useNativeDriver: false,
        }).start();

        Animated.timing(opacity, {
          toValue: leader.x.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
          duration: 0,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.followerBox,
          {
            transform: [{translateX: follower.x}, {translateY: follower.y}],
          },
        ]}
      />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.leaderBox,
          {
            opacity: opacity,
            transform: [{translateX: leader.x}, {translateY: leader.y}],
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
  leaderBox: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  followerBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 5,
    position: 'absolute',
  },
});
