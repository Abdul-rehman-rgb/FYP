import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentForm from './StudentForm';
import TeacherForm from './TeacherForm';

const Stack = createNativeStackNavigator();

const AuthLayout = ({ route }) => {
  const { role } = route.params || {};

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role === 'Student' && (
        <Stack.Screen
          name="StudentForm"
          component={StudentForm}
          options={{ title: 'Student Registration' }}
        />
      )}
      {role === 'Teacher' && (
        <Stack.Screen
          name="TeacherForm"
          component={TeacherForm}
          options={{ title: 'Teacher Registration' }}
        />
      )}
      {role === 'Parent' && (
        <Stack.Screen
          name="TeacherForm"
          component={TeacherForm}
          options={{ title: 'Parent Registration' }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthLayout;
