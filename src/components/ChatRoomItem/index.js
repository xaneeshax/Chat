import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

const ChatRoomItem = ({ chatRoom }) => {

    const user = chatRoom.users[1]
    const navigation = useNavigation()
    console.log(navigation)

    return (
        <Pressable 
            onPress={() => navigation.navigate('Chat')} 
            style={styles.container}
        >
            <Image 
                source={{uri : user.imageUri}}
                style={styles.image}
            />

            {chatRoom.newMessages &&
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>
                        {chatRoom.newMessages}
                    </Text>
                </View>
            }

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <Text
                    numberOfLines={1} 
                    style={styles.text}>
                        {chatRoom.lastMessage.content}
                </Text>
            </View>
        </Pressable>
    )   
}

export default ChatRoomItem