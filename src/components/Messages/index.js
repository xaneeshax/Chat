import React from "react";
import { View, Text, } from 'react-native';
import styles from './styles'

const myID = "u1";

const Messages = ({ message }) => {

    const isMe = message.user.id == myID;

    return (
        <View style={[
            styles.container,
            isMe ? styles.leftContainer : styles.rightContainer 
        ]}>
            <Text 
                style={{ color : isMe ? 'black' : 'white'}}
            >
                {message.content}
            </Text>
        </View>
    )    
};

export default Messages;

