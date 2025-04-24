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
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { userData } from '../Context/UserContext';
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
    const {loggedInUserId,loggedInUserPoints,setLoggedInUserPoints} = userData();
    const route = useRoute();
    const {course} = route.params
    const [quizQue,setQuizQue] = useState({})
    const [que_index,setQue_index] = useState(0);
    const [submitted,setSubmitted] = useState(false)
    const [correctButton,setCorrectButton] = useState(0)
    const [inCorrectButton,setInCorrectButton] = useState(0)

    useEffect(()=>{
        getQuesion();   
    },[que_index])
    
    async function getQuesion()
    {
        let id = { id : course.Quiz_Questions[que_index]}

        let Question = await axios.post('http://10.0.2.2:5000/api/getQuizQuestion',id)
        console.log(Question.data);
        setQuizQue(Question.data)
        
    }

    function handleNext()
    {
        let increment = que_index+1
        if(increment < course.Quiz_Questions.length)
        {
            setQue_index(increment)
            setSubmitted(false)
            setCorrectButton(0)
            setInCorrectButton(0)
        }
    }

    async function SelectAnswer(answer,num)
    {
        if(!submitted)
        {
            if(answer == quizQue.R_Answer)
            {
                setCorrectButton(num)
                setSubmitted(true)
                const inc_points = 
                {
                    id : loggedInUserId,
                    flag : true,
                    points : 10
                }
                const updatedPoints = await axios.post('http://10.0.2.2:5000/api/updatePoints',inc_points)
                
                setLoggedInUserPoints(updatedPoints.data.Points)
            }
            else
            {
                let num2;
                if(quizQue.Answer_1 == quizQue.R_Answer)
                {
                    num2 = 1
                }
                else if(quizQue.Answer_2 == quizQue.R_Answer)
                {
                    num2 = 2
                }
                else if(quizQue.Answer_3 == quizQue.R_Answer)
                {
                    num2 = 3
                }
                else if(quizQue.Answer_4 == quizQue.R_Answer)
                {
                    num2 = 4
                }
                setCorrectButton(num2)
                setInCorrectButton(num)
                setSubmitted(true)
                const dec_points = 
                {
                    id : loggedInUserId,
                    flag : false,
                    points : 10
                }
                const updatedPoints = await axios.post('http://10.0.2.2:5000/api/updatePoints',dec_points)
                
                setLoggedInUserPoints(updatedPoints.data.Points)
            }
        }
    }

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
                    value={que_index+1}
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
                    <Text style={styles.coinText}>{loggedInUserPoints}</Text>
                    <View style={styles.coinImageWrapper}>
                        <Image style={styles.coinImage} source={require('../assets/images/coins.png')}/>
                    </View>
                </View>
            </View>

            <Image style={styles.headerImg} source={require('../assets/images/QuizHeaderBG.png')}/>
            <View style={{flex:1}}>
                <View style={styles.choiceContainer}>
                    <Text style={styles.totalQueTxt}>Question {que_index+1} of {course.Quiz_Questions.length}</Text>
                    <Text style={styles.questionTxt}>{quizQue.Question}</Text>

                    <TouchableOpacity 
                    style = {(()=>{
                        if(correctButton == 1 && inCorrectButton == 0)
                        {
                            return styles.choiceOption2
                        }
                        else if(inCorrectButton == 1)
                        {
                            return styles.choiceOption3
                        }
                        else
                        {
                            return styles.choiceOption
                        }

                    }) ()} 
                    onPress={() => SelectAnswer(quizQue.Answer_1,1)}>
                        {correctButton == 1 &&
                            <Image style={styles.tickImg} source={require('../assets/images/tick.png')}/>
                        }
                        <Text style={(correctButton == 1 && inCorrectButton == 0) ? styles.choiceTxt : styles.choiceTxt2}>{quizQue.Answer_1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style = {(()=>{
                        if(correctButton == 2 && inCorrectButton == 0)
                        {
                            return styles.choiceOption2
                        }
                        else if(inCorrectButton == 2)
                        {
                            return styles.choiceOption3
                        }
                        else
                        {
                            return styles.choiceOption
                        }

                    }) ()} 
                    onPress={() => SelectAnswer(quizQue.Answer_2,2)}>
                        {correctButton == 2 &&
                            <Image style={styles.tickImg} source={require('../assets/images/tick.png')}/>
                        }
                        <Text style={(correctButton == 2 && inCorrectButton == 0) ? styles.choiceTxt : styles.choiceTxt2}>{quizQue.Answer_2}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style = {(()=>{
                        if(correctButton == 3 && inCorrectButton == 0)
                        {
                            return styles.choiceOption2
                        }
                        else if(inCorrectButton == 3)
                        {
                            return styles.choiceOption3
                        }
                        else
                        {
                            return styles.choiceOption
                        }

                    }) ()} 
                    onPress={() => SelectAnswer(quizQue.Answer_3,3)}>
                        {correctButton == 3 &&
                            <Image style={styles.tickImg} source={require('../assets/images/tick.png')}/>
                        }
                        <Text style={(correctButton == 3 && inCorrectButton == 0) ? styles.choiceTxt : styles.choiceTxt2}>{quizQue.Answer_3}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style = {(()=>{
                        if(correctButton == 4 && inCorrectButton == 0)
                        {
                            return styles.choiceOption2
                        }
                        else if(inCorrectButton == 4)
                        {
                            return styles.choiceOption3
                        }
                        else
                        {
                            return styles.choiceOption
                        }

                    }) ()} 
                    onPress={() => SelectAnswer(quizQue.Answer_4,4)}>
                        {correctButton == 4 &&
                            <Image style={styles.tickImg} source={require('../assets/images/tick.png')}/>
                        }
                        <Text style={(correctButton == 4 && inCorrectButton == 0) ? styles.choiceTxt : styles.choiceTxt2}>{quizQue.Answer_4}</Text>
                    </TouchableOpacity>

                    <View style={styles.choiceTxtContainer}>
                        {(()=>{
                            if(correctButton != 0 && inCorrectButton == 0 )
                            {
                                return (
                                <>
                                    <Text style={styles.choiceContainerTxt}>That's the right answer / </Text>
                                    <Text style={styles.choiceContainerTxt2}> +10 Coins </Text>
                                </>)
                                
                            }
                            else if(inCorrectButton != 0)
                            {
                                return <Text style={styles.choiceContainerTxt}>That's the wrong answer ❌</Text>
                            }
                        })()}
                        
                        
                    </View>
                </View>
                <TouchableOpacity style={styles.next} onPress={handleNext}>
                    <Text style={[styles.choiceTxt,{fontWeight:'bold'}]}> Next </Text>
                </TouchableOpacity>
            </View>
        </View>
        // <></>
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
        backgroundColor:'rgb(187, 187, 187)',
        borderRadius:100,
        margin:'2%',
        padding:'5%',
        paddingVertical:'5%'
    },
    choiceOption2:{
        backgroundColor:'rgba(54,178,149,1)',
        borderRadius:100,
        margin:'2%',
        padding:'5%',
        paddingVertical:'5%'
    },
    choiceOption3:{
        backgroundColor:'rgb(196, 58, 58)',
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