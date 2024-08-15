import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Letter} from '../Types'
interface Props {
  letter: Letter
  onToggle: (id: number) => void
  isSelected: boolean
}
export const LetterTwo: React.FC<Props> = ({letter, onToggle, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={() => onToggle(letter.id)}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]} />
        <Text style={styles.text}>{letter.subject}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selected: {
    backgroundColor: '#e0f7fa',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#fff',
  },
  checkedCheckbox: {
    backgroundColor: '#007aff',
  },
  text: {
    fontSize: 16,
  },
})
