import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#3777f0',
        alignSelf: 'flex-start',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '60%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    leftContainer: {
        backgroundColor: "lightgray",
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: "#3777f0",
        marginLeft: 'auto',
        marginRight: 10,
    },
    text: {
        color: 'white',
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
    }
    
});

export default styles;