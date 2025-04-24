import { View, StyleSheet, Alert } from 'react-native';
import React, { useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import FormField from '../components/FormField';
import ConfirmBtn from '../components/ConfirmBtn';
import axios from 'axios'
import { userData } from '../Context/UserContext'


const StudentForm = () => {
  const {loggedInUser,setLoggedInUser,setLoggedInUserId,setLoggedInUserPfp,setLoggedInUserPoints} = userData()
  const navigation = useNavigation(); // Ensure navigation is initialized
  const [error,setError] = useState()
  const [form, setForm] = useState({
    // studentId: '',
    email: '',
    pass: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // if (!form.studentId || !form.email || !form.password) {
    //   Alert.alert('Error', 'All fields are required!');
    //   return;
    // }
    // setIsSubmitting(true);
    try{
      let response = await axios.post('http://10.0.2.2:5000/api/Login',form)
        // setLoggedInUserId(response.data._id)
        // setLoggedInUserPfp(response.data.pfp)
        // setLoggedInUser(response.data.Name)
        // console.log(response.data.Name)
        console.log(response.data);
        
        setLoggedInUserId(response.data._id)
        setLoggedInUser(response.data.Name)
        setLoggedInUserPoints(response.data.Points)
        // setIsSubmitting(false);
        // navigation.replace('(tabs)');
      }
      catch(err)
      {
        setError(err.response.data)
        console.log("err"+err)
      }

    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   // Alert.alert('Success', 'Registration completed!');
    //   navigation.replace('(tabs)'); // Navigate to the main app
    // }, 1500);
  };

  useEffect(() => {
    if (loggedInUser !== 'Demo User') {
      console.log(loggedInUser);      
      navigation.replace('(tabs)');
    }
  }, [loggedInUser]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Heading heading="Enter Information" />
          <Paragraph paragraph="Provide your details to continue" />

          <FormField
            title="Student ID"
            value={form.studentId}
            handleChangeText={(e) => setForm({ ...form, studentId: e })}
            keyboardType="numeric"
            placeholder="ex. 232435"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            placeholder="example@domain.com"
          />

          <FormField
            title="Password"
            value={form.pass}
            handleChangeText={(e) => setForm({ ...form, pass: e })}
            placeholder="Enter your password"
            secureTextEntry={true} // Hides password
          />

          <ConfirmBtn
            title="Log in"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default StudentForm;
