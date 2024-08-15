import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {useNavigation, ParamListBase} from '@react-navigation/native'

import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
export const StateTestComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <ScrollView style={{flex: 1}}>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate('MailOne')}>
          <Text style={[styles.text]}>Mail One State</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate('MailTwo')}>
          <Text style={[styles.text]}>Mail Two State</Text>
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
