import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  };

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  }

  const onHandleDelete = (item) => {

  }

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}
      onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>
        {item.value}
      </Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id;

  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='Add a new task'
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button title='Add'
          color='#F2CCC3'
          onPress={onHandlerSubmit}
          disabled={!task}
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
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
