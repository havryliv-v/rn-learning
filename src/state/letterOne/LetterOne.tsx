//@ts-nocheck

import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const LetterOne = ({letter, isHighlighted, onHover, onToggleStar}) => {
  console.log(isHighlighted);
  return (
    <TouchableOpacity
      style={[styles.item, isHighlighted && styles.highlighted]}
      onPress={() => onHover(letter)} // React Native doesn't have `onMouseEnter`, so use `onPress`
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onToggleStar(letter)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {letter.isStarred ? 'Unstar' : 'Star'}
          </Text>
        </TouchableOpacity>
        <Text>{letter.subject}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlighted: {
    backgroundColor: '#e0e0e0',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    color: '#333',
  },
});
