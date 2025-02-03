import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Screen
import Chat from './Chat';
import Courses from './Courses';
import Library from './Library';
import Home from './Home';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#36B295',
        tabBarInactiveTintColor: '#0000008C',
        headerShown: false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/home.png')} 
              style={[styles.tabIcon, { tintColor: focused ? '#36B295' : '#0000008C' }]} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/courses.png')} 
              style={[styles.tabIcon, { tintColor: focused ? '#36B295' : '#0000008C' }]} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/library.png')} 
              style={[styles.tabIcon, { tintColor: focused ? '#36B295' : '#0000008C' }]} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/chat.png')} 
              style={[styles.tabIcon, { tintColor: focused ? '#36B295' : '#0000008C' }]} 
            />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/setting.png')} 
              style={[styles.tabIcon, { tintColor: focused ? '#36B295' : '#0000008C' }]} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain',
  },
});

export default TabsLayout;
