import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Messages from "../../components/Messages";
import chatRoomData from "../../assets/dummy-data/Chats"

const ChatScreen = () => {

    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={
                    ({ item }) => 
                    <Messages message={item} />
                }
            />
        </View>
         
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default ChatScreen;