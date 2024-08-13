import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

export const ScrollViewExample = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {Array.from({length: 40}).map((_, index) => (
            <Text style={styles.text} key={index}>
              Item {index + 1}
            </Text>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: '#ccc',
    padding: 10,
    textAlign: 'center',
  },
});
