import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        padding: 30,
        backgroundColor: '#E78F8E'
    },
    input: {
        borderBottomColor: '#E78F8E',
        borderBottomWidth: 1,
        height: 50,
        color: '#fff',
        fontSize: 25,
    },
    listContainer: {
        padding: 30
    },
    itemContainer: {
        backgroundColor: '#FFE6E8',
        marginBottom: 15,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    itemList: {
        fontSize: 20,
        fontWeight: 'bold'
    },
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
