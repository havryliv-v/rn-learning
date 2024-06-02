/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextComponent,
  useColorScheme,
  View,
} from 'react-native';

import SvgExample from './src/Svg/Svg';
import Mask from './src/Mask/Mask';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TextComponent}>
        <Text style={styles.text}>
          Humans (Homo sapiens) or modern humans are the most common and
          widespread species of primate, and the last surviving species of the
          genus Homo. They are great apes characterized by their hairlessness,
          bipedalism, and high intelligence. Humans have large brains, enabling
          more advanced cognitive skills that enable them to thrive and adapt in
          varied environments, develop highly complex tools, and form complex
          social structures and civilizations. Humans are highly social, with
          individual humans tending to belong to a multi-layered network of
          cooperating, distinct, or even competing social groups – from families
          and peer groups to corporations and political states. As such, social
          interactions between humans have established a wide variety of values,
          social norms, languages, and traditions (collectively termed
          institutions), each of which bolsters human society.
        </Text>
        <Mask />
      </View>
      <View style={styles.test}>
        <SvgExample />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    color: 'black',
  },
  TextComponent: {
    flex: 1,
  },
  text: {
    fontFamily: 'Apache',
    fontSize: 20,
  },
  test: {
    height: 100,
    marginBottom: 50,
  },
});

export default App;
