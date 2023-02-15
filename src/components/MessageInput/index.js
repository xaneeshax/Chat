import { View, Text, TextInput, Pressable,KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Icon from "react-native-ionicons";

const MessageInput = () => {

  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn("sending", message)
    setMessage("")
  }

  const onPlusClicked = () => {
    console.warn("On plus Clicked")
  }

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked()
    }
  }


  return (
    <KeyboardAvoidingView 
      style={styles.root}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <Icon name="happy" size={24} color={"grey"} style={styles.icon}/>
        <TextInput 
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Your Message..."
        />
        <Icon name="camera" size={24} color={"grey"} style={styles.icon}/>
        <Icon name="mic" size={24} color={"grey"} style={styles.icon}/>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable 
          onPress={onPress}
          style={styles.buttonText}
        >
          {
            message ?
            <Icon name="send" size={24} color={"white"} style={styles.icon}/> :
            <Icon name="add" size={24} color={"white"} style={styles.icon}/>
          }
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default MessageInput