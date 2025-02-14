import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import HeadderHeading from '../components/Home/HeadderHeading';
import Paragraph from '../components/Paragraph';

const Data = 
[
  {
    id:'1',
    category:'Web Development',
    courses:
      [
        {
          id: '1',
          title: 'Basic Web Development',
          courses:[
            {
              id: '1',
              title: 'Html Basics',
            },
            {
              id: '2',
              title: 'CSS Basics',
            },
            {
              id: '3',
              title: 'Introduction to JavaScript',
            }  
          ]
        },
        {
          id: '2',
          title: 'React Js Course',
          courses:[
            {
              id: '1',
              title: 'Introduction to React Js',
            },
            {
              id: '2',
              title: 'Intermediate React Js Course',
            },
            {
              id: '3',
              title: 'Advanced React Js Course',
            }  
          ]
        },
        {
          id: '3',
          title: 'Node Js Course',
          courses:[
            {
              id: '1',
              title: 'Introduction to Node Js',
            },
            {
              id: '2',
              title: 'Intermediate Node Js Course',
            },
            {
              id: '3',
              title: 'Advanced Node Js Course',
            }  
          ]
        }  
      ]
  },
  {
    id:'2',
    category:'Data Analysis',
    courses:
    [
      {
        id: '1',
        title: 'Data Analysis 1',
        courses:[
          {
            id: '1',
            title: 'Introduction to Data Analysis 1',
          },
          {
            id: '2',
            title: 'Intermediate Data Analysis 1',
          },
          {
            id: '3',
            title: 'Advanced Data Analysis 1',
          }  
        ]
      },
      {
        id: '2',
        title: 'Data Analysis 2',
        courses:[
          {
            id: '1',
            title: 'Introduction to Data Analysis 2',
          },
          {
            id: '2',
            title: 'Intermediate Data Analysis 2',
          },
          {
            id: '3',
            title: 'Advanced Data Analysis 2',
          }  
        ]
      },
      {
        id: '3',
        title: 'Data Analysis 3',
        courses:[
          {
            id: '1',
            title: 'Introduction to Data Analysis 3',
          },
          {
            id: '2',
            title: 'Intermediate Data Analysis 3',
          },
          {
            id: '3',
            title: 'Advanced Data Analysis 3',
          }  
        ]
      }  
    ]
  },
  {
    id:'3',
    category:'Cyber Security',
    courses:
    [
      {
        id: '1',
        title: 'CyberSecurity 1',
        courses:[
          {
            id: '1',
            title: 'Introduction to CyberSecurity 1',
          },
          {
            id: '2',
            title: 'Intermediate CyberSecurity 1',
          },
          {
            id: '3',
            title: 'Advanced CyberSecurity 1',
          }  
        ]
      },
      {
        id: '2',
        title: 'CyberSecurity 2',
        courses:[
          {
            id: '1',
            title: 'Introduction to CyberSecurity 2',
          },
          {
            id: '2',
            title: 'Intermediate CyberSecurity 2',
          },
          {
            id: '3',
            title: 'Advanced CyberSecurity 2',
          }  
        ]
      },
      {
        id: '3',
        title: 'CyberSecurity 3',
        courses:[
          {
            id: '1',
            title: 'Introduction to CyberSecurity 3',
          },
          {
            id: '2',
            title: 'Intermediate CyberSecurity 3',
          },
          {
            id: '3',
            title: 'Advanced CyberSecurity 3',
          }  
        ]
      }  
    ]
  },
];

const CoursesCard = ({ course }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={()=>{navigation.navigate('CourseDetails', {course:course})}}
    >
      <Text style={styles.title}>{course.title}</Text>
      <Image source={require('../assets/icons/rightarrowblack.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const Courses = () => {
  const navigation = useNavigation(); 

  
  return (
    <ScrollView style={styles.container}>
    <HeadderHeading HeadTitle="Technical Courses" />
    {Data.map((type)=>(
      <View key={type.id}>
      <Text style={styles.title}>{type.category}</Text>
      <FlatList
          data={type.courses}
          renderItem={({ item }) => <CoursesCard course={item}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true} // Allows nested scrolling inside another ScrollView
          contentContainerStyle={{ paddingBottom: 20 }} // Avoids cutting the last item
      />
      </View>
    ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
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
    marginBottom:10
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Courses;
