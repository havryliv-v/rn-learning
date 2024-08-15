import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnimatedComponent} from '../ui-and-interaction/animation/animatedComponent';
import {DynamicTracking} from '../ui-and-interaction/animation/dynamicTracking';
import {HorizontalScrollExample} from '../ui-and-interaction/animation/gestureTracking';
import {LayoutAnimationComponent} from '../ui-and-interaction/animation/layoutAnimation';

const Stack = createNativeStackNavigator();

export const AnimationRouterNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AnimatedComponent"
      component={AnimatedComponent}
      options={{title: 'Animated Component'}}
    />
    <Stack.Screen
      name="DynamicTrackingExample"
      component={DynamicTracking}
      options={{title: 'Tracking Values'}}
    />
    <Stack.Screen
      name="HorizontalScrollExample"
      component={HorizontalScrollExample}
      options={{title: 'Tracking Gestures'}}
    />
    <Stack.Screen
      name="LayoutAnimationComponent"
      component={LayoutAnimationComponent}
      options={{title: 'Layout Animation'}}
    />
  </Stack.Navigator>
);
