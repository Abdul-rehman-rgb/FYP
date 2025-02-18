import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import ReminderScreen from './Reminder';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.tabButton, isFocused && styles.activeTab]}
          >
            <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ReminderLayout = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="All" component={ReminderScreen} initialParams={{ category: 'All' }} />
      <Tab.Screen name="Quran" component={ReminderScreen} initialParams={{ category: 'Quran' }} />
      <Tab.Screen name="Duas" component={ReminderScreen} initialParams={{ category: 'Duas' }} />
      <Tab.Screen name="Others" component={ReminderScreen} initialParams={{ category: 'Others' }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal:10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#00000049',
  },
  activeTab: {
    backgroundColor: '#121212',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  activeTabText: {
    color: 'white',
  },
});

export default ReminderLayout;
