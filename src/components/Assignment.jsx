import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: '1',
    title: 'Assignment 1',
    dueDate: '20-02-2025',
    description: 
    [
      'Details related to assignment\n',
      'Q1 question 1 ?\n',
      'Q2 question 2 ?\n',
      'Q3 question 3 ?\n',
    ],
    marks:'5'
  },
  {
    id: '2',
    title: 'Assignment 2',
    dueDate: '20-02-2025',
    description: 
    [
      'Details related to assignment\n',
      'Q1 question 1 ?\n',
      'Q2 question 2 ?\n',
      'Q3 question 3 ?\n',
    ],
    marks:'5'
  },
  {
    id: '3',
    title: 'Assignment 3',
    dueDate: '20-02-2025',
    description: 
    [
      'Details related to assignment\n',
      'Q1 question 1 ?\n',
      'Q2 question 2 ?\n',
      'Q3 question 3 ?\n',
    ],
    marks:'5'
  },
];

const AssignmentCard = ({ assignment }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={()=>{navigation.navigate('AssignmentDetails', {assignmentDetail:assignment})}}
    >
      <Text style={styles.title}>{assignment.title}</Text>
      <Image source={require('../assets/icons/rightarrowblack.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const Assignment = () => {
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <AssignmentCard assignment={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true} // Allows nested scrolling inside another ScrollView
        contentContainerStyle={{ paddingBottom: 40 }} // Avoids cutting the last item
      />
    </View>
  )
}

export default Assignment

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 70,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    flex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
})