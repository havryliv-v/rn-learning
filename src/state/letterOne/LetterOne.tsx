import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Letter} from '../Types'
interface Props {
  letter: Letter
  isHighlighted: boolean
  onHover: (letter: Letter) => void
  onToggleStar: (letter: Letter) => void
}
export const LetterOne: React.FC<Props> = ({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) => {
  console.log(isHighlighted)
  return (
    <TouchableOpacity
      style={[styles.item, isHighlighted && styles.highlighted]}
      onPress={() => onHover(letter)}>
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
  )
}

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
})
