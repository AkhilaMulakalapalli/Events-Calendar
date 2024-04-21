import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarComponent from './CalendarComponent';
import EventScreen from './EventScreen'; // Import the new screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalendarComponent} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;