import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: '#eee',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dedede',
        flexDirection: "row",
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginRight: 5, 
        marginLeft: 5, 
    },
    buttonContainer: {
        width: 37,
        height: 37,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default styles;