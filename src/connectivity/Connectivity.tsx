import {useNavigation, ParamListBase} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
export const Connectivity = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{flex: 1}}>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate('NetworkingExample')}>
          <Text style={[styles.text]}>Networking Example</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate('WebSocketExample')}>
          <Text style={[styles.text]}>Websocket Example</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'tomato',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
