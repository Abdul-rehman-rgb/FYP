import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuizDetails = ({route}) => {
  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.date}>Due Date : {route.params?.quizDetail.dueDate}</Text>
        <Text style={styles.date}>Marks : {route.params?.quizDetail.marks}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.date}>{route.params?.quizDetail.description}</Text>
      </View>
    </View>
  )
}

export default QuizDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderRadius:15,
    marginTop:10
  },
  date:{
    fontSize:18,
    margin:10
  },
})