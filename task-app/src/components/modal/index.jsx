import React from "react";
import { Modal, View, Text, Button } from 'react-native'
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete }) => {
    return (
        <Modal visible={isModalVisible}
            animationType='slide'
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle} >
                    Task Detail
                </Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>
                        Are you sure to delete this item?
                    </Text>
                    <Text style={styles.selectedTask}>
                        {selectedTask?.value}
                    </Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button title='Cancel'
                        color='#ACD8AA'
                        onPress={onHandleCancel}>
                    </Button>
                    <Button title='Delete'
                        color='#F48498'
                        onPress={onHandleDelete}>
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;