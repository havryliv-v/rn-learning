import {letters} from './dataTwo.js'

import React, {useState} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {LetterTwo} from './LetterTwo.tsx'
import {Letter} from '../Types.ts'

export const MailTwo = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const selectedCount = selectedIds.length

  const handleToggle = (toggledId: number) => {
    setSelectedIds((prevSelectedIds: number[]) => {
      if (prevSelectedIds.includes(toggledId)) {
        return prevSelectedIds.filter((id) => id !== toggledId)
      } else {
        return [...prevSelectedIds, toggledId]
      }
    })
  }

  const renderItem = ({item}: {item: Letter}) => (
    <LetterTwo
      key={item.id}
      letter={item}
      isSelected={selectedIds.includes(item.id)}
      onToggle={() => handleToggle(item.id)}
    />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inbox</Text>
      <FlatList
        data={letters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.separator} />
      <Text style={styles.selectedCount}>
        <Text style={styles.boldText}>
          You selected {selectedCount} letter{selectedCount !== 1 ? 's' : ''}
        </Text>
      </Text>
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
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  selectedCount: {
    // add your styles here
  },
  boldText: {
    // add your styles here
  },
})
