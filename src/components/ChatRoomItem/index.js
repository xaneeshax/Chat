import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatRoomItem = ({ chatRoom }) => {

    const user = chatRoom.users[1]
    const navigation = useNavigation()

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
                    <Text style={styles.text}>{dayjs(chatRoom.lastMessage.createdAt).fromNow()}</Text>
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