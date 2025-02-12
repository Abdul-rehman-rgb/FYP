import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Quiz from './Quiz';
import Assignment from './Assignment';

const EnrolledCourseDetails = () => {
  const [active,setActive] = useState('Material')


  return (
    <View>
      <View style={styles.buttonContainer}>
        <Pressable style={({pressed})=>[{backgroundColor: pressed? 'rgba(255, 255, 255, 0.19)' : 'white'},styles.btnStyle]} onPress={()=>setActive('Material')}>
          <View style={{minWidth:1}}>
          <Text style={styles.btnText} >Material</Text>
          <View style={active === 'Material' && styles.btnUnderline}/>
          </View>
        </Pressable>

        <Pressable style={({pressed})=>[{backgroundColor: pressed? 'rgba(255, 255, 255, 0.19)' : 'white'},styles.btnStyle]} onPress={()=>setActive('Quizes')}>
          <Text style={styles.btnText} >Quizes</Text>
          <View style={active === 'Quizes' && styles.btnUnderline}/>
        </Pressable>

        <Pressable style={({pressed})=>[{backgroundColor: pressed? 'rgba(255, 255, 255, 0.19)' : 'white'},styles.btnStyle]} onPress={()=>setActive('Assignments')}>
          <Text style={styles.btnText} >Assignments</Text>
          <View style={active === 'Assignments' && styles.btnUnderline}/>
        </Pressable>
      </View>
      <View>
        {
          active === 'Quizes' &&
            <Quiz/>
        }
        {
          active === 'Assignments'  &&
            <Assignment/>
        }
      </View>
    </View>
    
  )
}

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