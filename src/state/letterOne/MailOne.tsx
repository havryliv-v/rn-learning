import React, {useState, useCallback} from 'react'
import {initialLetters} from './dataOne.js'
import {LetterOne} from './LetterOne.tsx'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {Letter} from '../Types.ts'

export const MailOne = () => {
  const [letters, setLetters] = useState<Letter[]>(initialLetters)
  const [highlightedId, setHighlightedId] = useState<number | null>(null)
  const handleHover = useCallback((letter: Letter) => {
    setHighlightedId(letter.id)
  }, [])

  const handleStar = useCallback((starred: Letter) => {
    setLetters((prevLetters) =>
      prevLetters.map((letter) =>
        letter.id === starred.id
          ? {...letter, isStarred: !letter.isStarred}
          : letter
      )
    )
  }, [])

  const renderItem = ({item}: {item: Letter}) => {
    return (
      <LetterOne
        letter={item}
        isHighlighted={item.id === highlightedId}
        onHover={handleHover}
        onToggleStar={handleStar}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inbox</Text>
      <FlatList
        data={letters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
