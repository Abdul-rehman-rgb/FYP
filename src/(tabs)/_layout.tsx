import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

// Screens
import Chat from './Chat';
import Courses from './Courses';
import Library from './Library';
import Home from './Home';
import Setting from './Setting';
import Attendance from '../components/Home/attendance/Attendance';
import ReminderLayout from '../(Reminder)/_layout';
import QuranHadith from '../components/Home/book/QuranHadith';
import DuaDhikr from '../components/Home/dua/DuaDhikr';
import DuaDetail from '../components/Home/dua/DuaDetail';
<<<<<<< HEAD
import QuranDetail from '../components/Home/book/QuranDetail';
=======
import Quiz from '../components/Quiz';
import Assignment from '../components/Assignment';
import CourseDetails from '../components/CourseDetails';
import AssignmentDetails from '../components/AssignmentDetails';
import QuizDetails from '../components/QuizDetails';
>>>>>>> a90ee6215376d7b728def519e61b655a06065cda

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BackButton = ({navigation}) => (
  <>
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.backButton}>
    <Image
      source={require('../assets/icons/left-arrow.png')}
      style={styles.backArrow}
    />
  </TouchableOpacity>
</>
);
const Search = () => (
  <>
  <TouchableOpacity
  style={styles.backButton}>
  <Image
    source={require('../assets/icons/bookmark.png')}
    style={styles.backArrow}
  />
</TouchableOpacity>
<TouchableOpacity
  style={styles.backButton}>
  <Image
    source={require('../assets/icons/search-md.png')}
    style={styles.backArrow}
  />
</TouchableOpacity>
</>
);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
      <Stack.Screen
        name="DuaDhikr"
        component={DuaDhikr}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
       <Stack.Screen
        name="DuaDetail"
        component={DuaDetail}
        options={({route, navigation}) => ({
          headerShown: true,
          headerTitle: route.params?.dua?.title || 'Dua Detail',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerRight: () =><Search navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
      <Stack.Screen
        name="QuranHadith"
        component={QuranHadith}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
      <Stack.Screen
        name="QuranDetail"
        component={QuranDetail}
        options={({route, navigation}) => ({
          headerShown: true,
          headerTitle: route.params?.quran?.title || 'Quran Detail',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerRight: () =><Search navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
      <Stack.Screen
        name="(Reminder)"
        component={ReminderLayout}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: 'Reminder',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />
    </Stack.Navigator>
  );
};

const CourseStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="CoursesMain"
      component={Courses}
      options={({navigation}) => ({
        headerShown: false,
        headerTitle: '',
        headerLeft: () => <BackButton navigation={navigation} />,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#fff'},
      })}
      />
      
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={({route,navigation}) => ({
          headerShown: true,
          headerTitle: route.params?.courseTitle,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />      
      <Stack.Screen
        name="AssignmentDetails"
        component={AssignmentDetails}
        options={({route,navigation}) => ({
          headerShown: true,
          headerTitle: route.params?.assignmentDetail.title,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />      
      <Stack.Screen
        name="QuizDetails"
        component={QuizDetails}
        options={({route,navigation}) => ({
          headerShown: true,
          headerTitle: route.params?.quizDetail.title,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />      
    </Stack.Navigator>
  )
};

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#36B295',
        tabBarInactiveTintColor: '#0000008C',
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C'},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CourseStack"
        component={CourseStack}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/courses.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C'},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/library.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C'},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/chat.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C'},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/setting.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C'},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    resizeMode: 'contain',
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#1212120D',
    borderRadius: 100,
  },
  backArrow: {
    tintColor: '#000',
    resizeMode: 'contain',
  },
});

export default TabsLayout;
