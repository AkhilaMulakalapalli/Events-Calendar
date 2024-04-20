import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
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

  const renderEventsForDate = () => {
    if (!events[selectedDate]) {
      return <Text>No events for this date</Text>;
    }
    return events[selectedDate].map((event, index) => (
      <View key={index} style={styles.eventItem}>
        <Text>{event}</Text>
        <TouchableOpacity onPress={() => deleteEvent(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    ));
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
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeading}>Events for {selectedDate}:</Text>
        {renderEventsForDate()}
      </View>
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
  eventsContainer: {
    marginTop: 20,
  },
  eventsHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
  },
});

export default CalendarComponent;