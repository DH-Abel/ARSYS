import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import { database } from '../database';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch tasks from the database
  const fetchTasks = async () => {
    try {
      const tasksCollection = database.get('tasks');
      const allTasks = await tasksCollection.query().fetch();
      setTasks(allTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new task
  const addTask = async () => {
    try {
      const tasksCollection = database.get('tasks');
      await database.write(async () => {
        await tasksCollection.create(task => {
          task._raw.title = title;
          task._raw.is_completed = false;
        });
      });
      setTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Load tasks on initial render
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WatermelonDB Tasks</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.task}>
            {item._raw.title} - {item._raw.is_completed ? 'Completed' : 'Pending'}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  task: {
    fontSize: 18,
    marginVertical: 5,
  },
});