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
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#dedede'
    }, 
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35,

    }
})


export default styles;