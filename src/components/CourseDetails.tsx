import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Quiz from './Quiz';
import Assignment from './Assignment';
import { useNavigation } from '@react-navigation/native';
import Material from './Material';

const Tab = createMaterialTopTabNavigator();


const CourseDetailTabs = ({state, descriptors, navigation}) => {
  
  const [active,setActive] = useState('Material')

  const handeOnPress = (routeName)=>{
    setActive(routeName)
    navigation.navigate(routeName)
  }

  return (
    <View style={styles.buttonContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        return (

      <Pressable key={route.key} style={({pressed})=>[{backgroundColor: pressed? 'rgba(255, 255, 255, 0.19)' : 'white'},styles.btnStyle]} 
      onPress={() => handeOnPress(route.name)}>
        <Text style={styles.btnText} >{route.name}</Text>
        <View style={active === route.name && styles.btnUnderline}/>
      </Pressable>
    );
    })}
    </View>
  )
}



const EnrolledCourseDetails = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CourseDetailTabs {...props}/>}>
      <Tab.Screen name='Material' component={Material}  />
      <Tab.Screen name='Quiz' component={Quiz}  />
      <Tab.Screen name='Assignment' component={Assignment}  />
    </Tab.Navigator>
  );
};


export default EnrolledCourseDetails

const styles = StyleSheet.create(
  {
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignSelf:'stretch',
    },
    btnStyle:{
      width:'33%',
      // borderWidth:1,
      borderColor:'#FFFFFF',
      paddingTop:10,
    },
    btnText:{
      color:'black',
      fontSize : 20,
      fontWeight : 'bold',
      textAlign:'center',
    },
    btnUnderline:{
      borderBottomWidth:4,
      borderBottomColor:'black',
      paddingTop:5
    },
    listStyle:{
      marginTop:10
    }
  })