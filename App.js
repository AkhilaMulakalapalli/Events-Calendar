import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarComponent from './CalendarComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <CalendarComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;