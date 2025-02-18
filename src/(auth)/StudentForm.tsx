import { View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import FormField from '../components/FormField';
import ConfirmBtn from '../components/ConfirmBtn';

const StudentForm = () => {
  const navigation = useNavigation(); // Ensure navigation is initialized

  const [form, setForm] = useState({
    studentId: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // if (!form.studentId || !form.email || !form.password) {
    //   Alert.alert('Error', 'All fields are required!');
    //   return;
    // }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      // Alert.alert('Success', 'Registration completed!');
      navigation.replace('(tabs)'); // Navigate to the main app
    }, 1500);
  };

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
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your password"
            secureTextEntry={true} // Hides password
          />

          <ConfirmBtn
            title="Save & Continue"
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
