import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalDetailContainer: {
        paddingVertical: 20
    },
    modalDetailMessage: {
        fontSize: 15,
    },
    selectedTask: {
        fontSize: 20,
        color: "#F48498",
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center'
    },
    modalButtonContainer: {
        width: '70%',
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-around'
    }

});