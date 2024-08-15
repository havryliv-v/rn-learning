import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageComponent} from '../ui-and-interaction/imageComponent/ImageComponent';
import {AnimationRouter} from '../ui-and-interaction/animation/animationRouter';
import {ResponderDemo} from '../ui-and-interaction/animation/responderDemo';
import {ScrollViewExample} from '../ui-and-interaction/scrollView';
import {UIAndInteractions} from '../ui-and-interaction/UIAndInteractions';

const Stack = createNativeStackNavigator();

export const UIAndInteractionsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="UIAndInteractions"
      component={UIAndInteractions}
      options={{title: 'UI & Interactions'}}
    />
    <Stack.Screen
      name="ScrollViewExample"
      component={ScrollViewExample}
      options={{title: 'Scroll View'}}
    />
    <Stack.Screen
      name="ImageComponent"
      component={ImageComponent}
      options={{title: 'Image Component'}}
    />
    <Stack.Screen
      name="AnimationRouter"
      component={AnimationRouter}
      options={{title: 'Animation Router'}}
    />
    <Stack.Screen
      name="ResponderDemo"
      component={ResponderDemo}
      options={{title: 'Responder Demo'}}
    />
  </Stack.Navigator>
);
