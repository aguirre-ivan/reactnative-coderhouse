import React, { useState } from 'react';
import { View } from 'react-native';
import { AddItem, CustomModal, TaskList } from './components';
import { styles } from './styles';

const App = () => {
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

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id != selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  return (
    <View style={styles.container}>
      <AddItem
        buttonColor={"#F2CCC3"}
        buttonText={"Add"}
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='Add a new task'
        task={task}
      />
      <TaskList
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />
      <CustomModal
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
      />
    </View>
  );
}

export default App;