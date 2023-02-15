import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'grey'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3,
    },
    image : {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    badgeContainer: {
        backgroundColor: '#3872e9',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45,
        top: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    badgeText: {
        color: 'white', 
        fontSize: 12,
    }
})

export default styles;