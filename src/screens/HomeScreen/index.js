import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ChatRoomItem from "../../components/ChatRoomItem";

import chatRoomsData from "../../assets/dummy-data/ChatRooms"



const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.page}>
            <FlatList 
                data={chatRoomsData}
                renderItem={({ item }) => 
                    <ChatRoomItem chatRoom={item} />
                }
                showsVerticalScrollIndicator={true}
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

export default HomeScreen;