import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ScrollViewExample} from './src/ui-and-interaction/scrollView'; // Adjust the path as necessary
import {Home} from './src/homeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageComponent} from './src/ui-and-interaction/imageComponent/ImageComponent';
import {AnimatedComponent} from './src/ui-and-interaction/animation/animatedComponent';
import {DynamicTracking} from './src/ui-and-interaction/animation/dynamicTracking';
import {HorizontalScrollExample} from './src/ui-and-interaction/animation/gestureTracking';
import {LayoutAnimationComponent} from './src/ui-and-interaction/animation/layoutAnimation';
import {AnimationRouter} from './src/ui-and-interaction/animation/animationRouter';
import {ResponderDemo} from './src/ui-and-interaction/animation/responderDemo';
import {UIAndInteractions} from './src/ui-and-interaction/UIAndInteractions';
import {Connectivity} from './src/connectivity/Connectivity';
import {NetworkingExample} from './src/connectivity/fetchComponent';
import {WebSocketExample} from './src/connectivity/webSocketComponent';
import {StateTestComponent} from './src/state/stateTestComponent';
import {MailOne} from './src/state/letterOne/MailOne';
import {MailTwo} from './src/state/letterTwo/MailTwo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
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
          options={{title: 'Image'}}
        />
        <Stack.Screen
          name="AnimationRouter"
          component={AnimationRouter}
          options={{title: 'Animation Router'}}
        />
        <Stack.Screen
          name="AnimatedComponent"
          component={AnimatedComponent}
          options={{title: 'Animated Component'}}
        />
        <Stack.Screen
          name="DynamicTrackingExample"
          component={DynamicTracking}
          options={{title: 'Tracking values'}}
        />
        <Stack.Screen
          name="HorizontalScrollExample"
          component={HorizontalScrollExample}
          options={{title: 'Tracking gestures'}}
        />
        <Stack.Screen
          name="LayoutAnimationComponent"
          component={LayoutAnimationComponent}
          options={{title: 'Layout animation'}}
        />
        <Stack.Screen
          name="ResponderDemo"
          component={ResponderDemo}
          options={{title: 'Responder Demo'}}
        />
        <Stack.Screen name="Connectivity" component={Connectivity} />
        <Stack.Screen
          name="NetworkingExample"
          component={NetworkingExample}
          options={{title: 'Networking example'}}
        />
        <Stack.Screen
          name="WebSocketExample"
          component={WebSocketExample}
          options={{title: 'WebSocket example'}}
        />
        <Stack.Screen name="State" component={StateTestComponent} />
        <Stack.Screen
          name="MailOne"
          component={MailOne}
          options={{title: 'Mail One State example'}}
        />
        <Stack.Screen
          name="MailTwo"
          component={MailTwo}
          options={{title: 'Mail Two State example'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
