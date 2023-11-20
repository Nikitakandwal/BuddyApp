import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Switch, ScrollView } from 'react-native';

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description for Task 1', completed: false, missed: false, upcoming: true, endTime: '14:00' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2', completed: false, missed: false, upcoming: true, endTime: '15:30' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3', completed: false, missed: false, upcoming: true, endTime: '16:45' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [customEndTime, setCustomEndTime] = useState('');
  const [selectedTab, setSelectedTab] = useState('All Tasks');

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed, missed: false } : task
      )
    );
  };

  const handleTimeClick = (taskId) => {
    setModalVisible(true);
    setCustomEndTime(tasks.find((task) => task.id === taskId).endTime);
  };

  const handleSetCustomEndTime = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId && task.upcoming
          ? { ...task, endTime: customEndTime, upcoming: false }
          : task
      )
    );

    setModalVisible(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderTaskCard = (task) => (
    <TouchableOpacity onPress={() => handleToggleTask(task.id)} key={task.id}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <View style={{ height: 150, width: 290, backgroundColor: task.completed ? '#00796B' : (task.upcoming ? '#FFA500' : '#084BC0'), borderRadius: 19, marginLeft: 10 }}>
          <Switch value={task.completed} onValueChange={() => handleToggleTask(task.id)} style={{ marginRight: 235, marginBottom: -50 }} />
          <Text style={{ color: 'white', marginTop: 12, fontWeight: '600', fontSize: 20, marginLeft: 50 }}>{task.name}</Text>
          <Text style={{ color: 'white', margin: 10 }}>{task.description}</Text>
          <TouchableOpacity onPress={() => handleTimeClick(task.id)}>
            <View>
              <Text style={{ fontSize: 18, marginLeft: 230, color: 'white', marginTop: -10 }}>{task.endTime || 'Set Time'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTasks = () => (
    <ScrollView horizontal={true}>
      {tasks.map(renderTaskCard)}
    </ScrollView>
  );

  const renderCompletedTasks = () => (
    <ScrollView horizontal={true}>
      {tasks.filter((task) => task.completed).map(renderTaskCard)}
    </ScrollView>
  );

  const renderMissedTasks = () => (
    <ScrollView horizontal={true}>
      {tasks.filter((task) => task.missed).map(renderTaskCard)}
    </ScrollView>
  );

  const renderUpcomingTasks = () => (
    <ScrollView horizontal={true}>
      {tasks.filter((task) => task.upcoming && !task.completed && !task.missed).map(renderTaskCard)}
    </ScrollView>
  );

  return (
    <View>
      <ScrollView horizontal={true}>
        <TouchableOpacity onPress={() => handleTabClick('All Tasks')}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: selectedTab === 'All Tasks' ? '#084BC0' : 'gray', paddingRight: 15 }}>All Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Upcoming Tasks')}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: selectedTab === 'Upcoming Tasks' ? '#084BC0' : 'gray', paddingRight: 15 }}>Upcoming Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Missed Tasks')}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: selectedTab === 'Missed Tasks' ? '#084BC0' : 'gray', paddingRight: 15 }}>Missed Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Completed Tasks')}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: selectedTab === 'Completed Tasks' ? '#084BC0' : 'gray', paddingRight: 15 }}>Completed Tasks</Text>
        </TouchableOpacity>
      </ScrollView>

      {selectedTab === 'All Tasks' && renderTasks()}
      {selectedTab === 'Completed Tasks' && renderCompletedTasks()}
      {selectedTab === 'Missed Tasks' && renderMissedTasks()}
      {selectedTab === 'Upcoming Tasks' && renderUpcomingTasks()}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 200, width: 300, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text>Set Custom End Time</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
              placeholder="HH:mm"
              value={customEndTime}
              onChangeText={(text) => setCustomEndTime(text)}
            />
            <TouchableOpacity onPress={() => handleSetCustomEndTime(tasks.find((task) => task.upcoming && !task.completed && !task.missed).id)}>
              <View style={{ backgroundColor: '#084BC0', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white' }}>Set End Time</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Task;
