import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </View>
    </View>
  )
}

export default MessageInput