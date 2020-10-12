import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import NewApplication from '../screens/NewApplication';
import OldApplication from '../screens/OldApplication';
import EmployeeProfile from '../screens/EmployeeProfile';
import DetailsScreen from '../screens/DetailsScreen';
import { exp } from 'react-native-reanimated';

const Stack = createStackNavigator();

const NewNav = () => {
    return(
        <Stack.Navigator initialRouteName="New">
            <Stack.Screen name="New" component={NewApplication} options={{ title : "New Applications" }} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

const OldNav = () => {
    return(
        <Stack.Navigator initialRouteName="Old">
            <Stack.Screen name="Old" component={OldApplication}  options={{ title : "Old Applications" }}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName=""
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
      <Tab.Screen
        name="New"
        component={NewNav}
        options={{
          tabBarLabel: 'New Applications',
          tabBarIcon: ({}) => (
            <Icon name="house-user" size={30} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Old"
        component={OldNav}
        options={{
          tabBarLabel: 'Old Applications',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-check" size={30} color="red" />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmployeeProfile}
        options={{
          tabBarLabel: 'Employee Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-tie" size={30} color="#900" />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default  BottomTab;


