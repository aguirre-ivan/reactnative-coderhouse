import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
  }
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
      <View style={styles.listContainer}>
        {
          tasks.map((item) => (
            <View style={styles.itemContainer}>
              <Text key={item.id}
                style={styles.itemList}
              >
                {item.value}
              </Text>
            </View>
          ))
        }
      </View>
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
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
