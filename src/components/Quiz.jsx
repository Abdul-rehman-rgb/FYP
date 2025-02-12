import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: '1',
    title: 'Quiz 1',
    dueDate: '20-02-2025',
    description: 'Details related to quiz',
    marks:'5'
  },
  {
    id: '2',
    title: 'Quiz 2',
    dueDate: '20-02-2025',
    description: 'Details related to quiz',
    marks:'5'
  },
  {
    id: '3',
    title: 'Quiz 3',
    dueDate: '20-02-2025',
    description: 'Details related to quiz',
    marks:'5'
  },
];

const QuizCard = ({ quiz }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={()=>{navigation.navigate('QuizDetails', {quizDetail:quiz})}}
    >
      <Text style={styles.title}>{quiz.title}</Text>
      <Image source={require('../assets/icons/rightarrowblack.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const Quiz = () => {
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <QuizCard quiz={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true} // Allows nested scrolling inside another ScrollView
        contentContainerStyle={{ paddingBottom: 40 }} // Avoids cutting the last item
      />
    </View>
  )
}

export default Quiz

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