import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
// import { useNavigation } from '@react-navigation/native';

const Data = 
{
    totalQues:20,
    Ques:
    [
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
        {
            Que:'Which Surah is called the heart of the Quran?',
            op1:"Surah Ya'seen",
            op2:"Surah Baqarah",
            op3:"Surah Ar-Rehman",
            op4:"Surah Tauba",
        },
    ]
}

const QuizDetails = ({navigation}) => {
    const [quizProgress,setQuizProgress] = useState(5)
    
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Image
                      source={require('../assets/icons/left-arrow.png')}
                      style={styles.backArrow}
                    />
                </TouchableOpacity>
                <View style={styles.progress}>
                <CircularProgress
                    value={quizProgress}
                    radius={30}
                    progressValueColor='rgba(54,178,149,1)'
                    maxValue={20}
                    progressValueFontSize={18}
                    activeStrokeWidth={5}
                    activeStrokeColor='rgba(54,178,149,1)'
                    inActiveStrokeWidth={5}
                    inActiveStrokeColor='rgba(54,178,149,0.2)'
                    clockwise={false}
                />
                </View>
                <View style={styles.coinContainer}>
                    <Text style={styles.coinText}>600</Text>
                    <View style={styles.coinImageWrapper}>
                        <Image style={styles.coinImage} source={require('../assets/images/coins.png')}/>
                    </View>
                </View>
            </View>
            <Image style={styles.headerImg} source={require('../assets/images/QuizHeaderBG.png')}/>
            <View style={{flex:1}}>
                <View style={styles.choiceContainer}>
                    <Text style={styles.totalQueTxt}>Question 5 of 20</Text>
                    <Text style={styles.questionTxt}>Which Surah is called the heart of the Quran?</Text>
                    <TouchableOpacity style={styles.choiceOption2}>
                        <Text style={styles.choiceTxt2}>Surah Ya'seen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choiceOption}>
                        <Image style={styles.tickImg} source={require('../assets/images/tick.png')}/>
                        <Text style={styles.choiceTxt}>Surah Baqarah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choiceOption2}>
                        <Text style={styles.choiceTxt2}>Surah Ar-Rehman</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choiceOption2}>
                    <Text style={styles.choiceTxt2}>Surah Tauba</Text>
                    </TouchableOpacity>

                    <View style={styles.choiceTxtContainer}>
                        <Text style={styles.choiceContainerTxt}>That's the right answer / </Text>
                        <Text style={styles.choiceContainerTxt2}> +10 Coins </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.next}>
                    <Text style={[styles.choiceTxt,{fontWeight:'bold'}]}> Next </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuizDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:10
    },
    progress:{
        flex:1,
        width:'100%',
        position:'absolute',
        alignItems:'center'
    },
    headerImg:{
        position:'absolute'
    },
    next:{
        backgroundColor:'rgba(54,178,149,1)',
        borderRadius:100,
        alignSelf:'center',
        padding:'2%',
        paddingHorizontal:'10%',
        marginBottom:'3%'
    },
    totalQueTxt:{
        fontSize:20,
        marginHorizontal:'5%',
        marginVertical:'2%',
    },
    questionTxt:{
        fontSize:35,
        marginHorizontal:10,
        marginBottom:10,
        fontWeight:'bold',
    },
    choiceContainer:{
        flex:1,
        justifyContent:'center',
        marginBottom:30,
        marginHorizontal:10,
    },
    tickImg:{
        position:'absolute',
        marginVertical:'6%',
        marginLeft:25,
        height:30,
        width:30
    },
    choiceOption:{
        backgroundColor:'rgba(54,178,149,1)',
        borderRadius:100,
        margin:'2%',
        padding:'5%',
        paddingVertical:'5%'
    },
    choiceOption2:{
        backgroundColor:'rgb(187, 187, 187)',
        borderRadius:100,
        margin:'2%',
        padding:'5%',
        paddingVertical:'5%'
    },
    choiceTxt:{
        fontSize:23,
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    choiceTxt2:{
        fontSize:23,
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    },
    choiceTxtContainer:{
        flexDirection:'row',
        borderRadius:1,
        justifyContent:'center',
        marginTop:'2%'
    },
    choiceContainerTxt:{
        fontSize:20
    },
    choiceContainerTxt2:{
        fontSize:20,
        color:'orange',
        fontWeight:'bold'
    },
    coinContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'50%',
        maxWidth:'22%',
        borderRadius:25,
        backgroundColor:'rgb(226, 226, 226)'
      },
      coinText:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:'13%'
      },
      coinImage:{
        height:32,
        width:32
      },
      coinImageWrapper:{
        backgroundColor:'rgba(54,178,149,1)',
        borderRadius:25,
        padding:3
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
})