import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Messages from "../../components/Messages";
import chatRoomData from "../../assets/dummy-data/Chats"
import MessageInput from "../../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";

const ChatScreen = () => {

    const route = useRoute();
    console.log("route",route)
    const navigation = useNavigation();

    navigation.setOptions({title: route.params.id})

    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={
                    ({ item }) => 
                    <Messages message={item} />
                }
            />
            <MessageInput />
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