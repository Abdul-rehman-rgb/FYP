import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import FormField from '../components/FormField'
import ConfirmBtn from '../components/ConfirmBtn'
import { useNavigation } from '@react-navigation/native'

//const navigation = useNavigation();

const TeacherForm = ({navigation}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    navigation.navigate('(tabs)');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Heading heading='Enter Information Teacher' />
          <Paragraph paragraph='Provide Email address to continue the journey' />
          <FormField title='Student Id'
          value={form.name}
          handleChangeText={(e) => setForm({...form, name: e})}
          keyboardType='name'
          placeholder='ex. 232435' />
          <FormField title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          keyboardType='email-address' 
          placeholder='example@domain.com'/>
          <FormField title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder='Password' />
          <ConfirmBtn title='Save & Continue' isLoading={isSubmitting} handlePress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default TeacherForm