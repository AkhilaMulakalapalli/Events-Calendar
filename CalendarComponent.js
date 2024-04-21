import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const CalendarComponent = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState({});

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const addEvent = () => {
    const updatedEvents = { ...events };
    if (!updatedEvents[selectedDate]) {
      updatedEvents[selectedDate] = [];
    }
    updatedEvents[selectedDate].push(eventName);
    setEvents(updatedEvents);
    console.log('Event added on:', selectedDate, 'Event Name:', eventName);
    setEventName('');
  };

  const deleteEvent = (index) => {
    const updatedEvents = { ...events };
    updatedEvents[selectedDate].splice(index, 1);
    setEvents(updatedEvents);
  };

  const viewEvents = () => {
    navigation.navigate('EventScreen', { date: selectedDate, events: events[selectedDate] || [], updateEvents: setEvents });
  };


  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Event Name"
        value={eventName}
        onChangeText={setEventName}
      />
      <Button title="Add Event" onPress={addEvent} />
      <Button title="View Events" onPress={viewEvents} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CalendarComponent;