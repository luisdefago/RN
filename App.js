import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, FlatList } from 'react-native';
import { Modal } from 'react-native';

export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const [task, setTask] = useState()

  const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(false);

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }

  const onHandlerChangeText = (text) => {
    setTask(text)
  }

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ]
    )
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const renderItem = ({ item }) => {
    <TouchableOpacity></TouchableOpacity>

  }
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput style={[styles.input, { borderColor: borderColor }]}
          onFocus={onHandlerFocus}
          onBlur={onHandlerBlur}
          cursorColor='#424D9E'
          placeholder='Ingresa su nombre'
          onChangeText={onHandlerChangeText}
          value={task}
        />
        <Button disabled={typeof tasks !== 'undefined' && tasks.length > 0} onPress={onHandlerCreateTask} title='Enviar' />
      </View>
      <View style={styles.containerLista}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={isVisible}>
      </Modal>
    </View>
  );
}
