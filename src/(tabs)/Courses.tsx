import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { FlatList} from 'react-native-gesture-handler';
import Card from '../components/Home/Card';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: '1',
    title: 'Foundations of Quranic Recitation 1',
  },
  {
    id: '2',
    title: 'Foundations of Quranic Recitation 2 ',
  },
  {
    id: '3',
    title: 'Foundations of Quranic Recitation 3',
  },
];

const Courses = () => {
  
  const navigation = useNavigation();

  //true = Enrolled Tab || false = Register Tab

  return (
  <View >
    <View style={styles.courseContainer}>
      <Text style={styles.mainHeading}>My Courses</Text>
    </View>
    <View style={styles.listStyle}>
    <FlatList
          data={Data}
          renderItem={({ item }) => <Card title={item.title} FunctionOnPress={()=>{navigation.navigate('CourseDetails', {courseTitle:item.title})}}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true} // Allows nested scrolling inside another ScrollView
          contentContainerStyle={{ paddingBottom: 40 }} // Avoids cutting the last item
    />
    </View>
  </View>
  )
}

export default Courses

const styles = StyleSheet.create(
  {
    courseContainer:{
    backgroundColor:'#0C6844',
    },
    mainHeading:{
      color:'#FFFFFF',
      fontSize : 28,
      // fontWeight : 'bold',
      textAlign:'center',
      paddingBottom:10,
      paddingTop:10,
    },
    listStyle:{
      marginTop:10
    }
  }
)