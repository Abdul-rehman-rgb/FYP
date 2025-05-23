import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ViewAll from './ViewAll';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Card from './Card';
import CourseData from './CourseData';
import Courses from '../../(tabs)/Courses';



const QuickAccess = () => {
  const navigation = useNavigation();
  const HandlePress = () => {
    navigation.navigate('(Reminder)');
  }
  return (
    <View style={styles.main}>
      <ViewAll title='Quick Access' PageLink='Courses' />
      <View style={styles.box}>
        <TouchableOpacity onPress={HandlePress} style={styles.innerBox}>
          <Image source={require('../../assets/icons/clock1.png')} />
          <Text style={styles.SubTitle}> Reminder </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerBox} onPress={()=>{navigation.navigate('Attendance')}}>
          <Image source={require('../../assets/icons/attendance.png')} />
          <Text style={styles.SubTitle} > Attendance </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerBox}>
          <Image source={require('../../assets/icons/task.png')} />
          <Text style={styles.SubTitle}> Tasks </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.innerBox} onPress={()=>{navigation.navigate('DuaDhikr')}}>
          <Image source={require('../../assets/icons/dua.png')} />
          <Text style={styles.SubTitle} > Dua Q&A </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerBox} onPress={()=>{navigation.navigate('QuranHadith')}}>
          <Image source={require('../../assets/icons/book.png')} />
          <Text style={styles.SubTitle} > Books </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerBox}>
          <Image source={require('../../assets/icons/donate.png')} />
          <Text style={styles.SubTitle}> Donate </Text>
        </TouchableOpacity>
      </View>
      <ViewAll title="Technical Courses" PageLink="Courses" PageLink={Courses} /> 
      <View style={styles.courseList}>
       <ScrollView>
       <FlatList
        data={CourseData}
        renderItem={({ item }) => <Card title={item.title} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        />
       </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  innerBox: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    borderRadius: 8,
    padding: 9,
    height: 80,
    width: 109,
    marginHorizontal: 10,
    marginVertical: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#2B3032',
    fontWeight: '600',
    lineHeight: 20,
  },
  courseList: {
    marginVertical: 20,
  },
});

export default QuickAccess;
