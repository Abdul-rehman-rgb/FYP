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
import QuranDetail from '../components/Home/book/QuranDetail';
import Quiz from '../components/Quiz';
import CourseDetails from '../components/CourseDetails';
import QuizDetails from '../components/QuizDetails';
import Leaderboard from '../components/Leaderboard';

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
    <Stack.Navigator screenOptions={{headerShown: false, }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'white',elevation: 0},
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
          headerTitle: route.params?.course.title,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#fff'},
        })}
      />    
    </Stack.Navigator>
  )
};
const QuizStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="QuizMain"
      component={Quiz}
      options={({navigation}) => ({
        headerShown: false,
        headerTitle: '',
        headerLeft: () => <BackButton navigation={navigation} />,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#fff'},
      })}
      />
      
      <Stack.Screen
        name="QuizDetails"
        component={QuizDetails}
        options={({navigation}) => ({
          headerShown: false,
          headerLeft: () => <BackButton navigation={navigation} />,
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
        tabBarStyle:{
          height:'10%',
          paddingTop:'2%'
        },
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
        name="QuizStack"
        component={QuizStack}
        options={{
          tabBarLabel: 'Quiz',
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
        name="CourseStack"
        component={CourseStack}
        options={{
          tabBarLabel: 'Courses',
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
        name="Ranking"
        component={Leaderboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/ranking.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#36B295' : '#0000008C',
                  height:'100%'
                },
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
    padding: 15,
    marginVertical:15,
    backgroundColor: '#1212120D',
    borderRadius: 100,
  },
  backArrow: {
    tintColor: '#000',
    resizeMode: 'contain',
  },
});

export default TabsLayout;
