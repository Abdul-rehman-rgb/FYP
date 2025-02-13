import { Pressable, StyleSheet, Text, View, Modal} from 'react-native'
import React, { useState, useEffect } from 'react'
import ThreeDotButton from './ThreeDotButton';
import { useNavigation } from '@react-navigation/native';

const AssignmentDetails = ({route}) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight:() => (
        <ThreeDotButton onPressFunction={()=>setVisible(!visible)} />
      )
    });
  }, [navigation]);

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.date}>Due Date : {route.params?.assignmentDetail.dueDate}</Text>
        <Text style={styles.date}>Marks : {route.params?.assignmentDetail.marks}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.date}>{route.params?.assignmentDetail.description}</Text>
      </View>
      <View style={styles.container}>
        
        <Text style={styles.txtAttach}>Your Attached File</Text>
      </View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={()=>setVisible(false)}>
        <View style={styles.modalOverlay} >
          <View style={styles.modalTransparent} onTouchStart={()=>setVisible(false)}></View>
          <View style={styles.modalContainer}>
          <Pressable style={({pressed})=>[{backgroundColor: pressed? 'rgba(0, 0, 0, 0.15)' : 'white'},styles.modalBtnStyle]}
            >
            <Text style={styles.modalText}>Attach File</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed? 'rgba(0, 0, 0, 0.15)' : 'white'},styles.modalBtnStyle]}
            >
            <Text style={styles.modalText}>Submit Assignment</Text>
          </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AssignmentDetails

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
  btnStyle:{
    width:'33%',
    // borderWidth:1,
    borderColor:'#FFFFFF',
    padding:10,
    marginVertical:10,
    borderRadius:10,
    right:0
  },
  txtAttach:{
    fontSize:16,
    margin:10
  },
  modalBtnStyle:{
    padding:20
  },
  modalOverlay:{
    flex:1,
    justifyContent:'center',
    height:'100%',
  },
  modalTransparent:{
    backgroundColor:'rgba(0, 0, 0, 0.4)',
    flex:1
  },
  modalContainer:{
    width:'100%',
    backgroundColor:'white',
    position:'absolute',
    bottom:0,
    paddingVertical:10,
  },
  modalText:{
    fontSize:18,
  }
})