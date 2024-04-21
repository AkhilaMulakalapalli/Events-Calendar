import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EventScreen = ({ route, navigation }) => {

  const { date, events, updateEvents } = route.params;

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    updateEvents((prevEvents) => ({ ...prevEvents, [date]: updatedEvents }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>Events for {date}:</Text>
      <View style={styles.eventsContainer}>
        {events.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Text style={styles.event}>{event}</Text>
            <TouchableOpacity onPress={() => deleteEvent(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventsContainer: {
    marginTop: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  event: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
  },
});

export default EventScreen;