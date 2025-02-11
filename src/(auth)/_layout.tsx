import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentForm from './StudentForm';
import TeacherForm from './TeacherForm';
import ParentForm from './ParentForm'; // Add a separate ParentForm

const Stack = createNativeStackNavigator();

const AuthLayout = ({ route }) => {
  const { role } = route.params || {};
  
  // Determine initial screen based on role
  const initialScreen =
    role === 'Student' ? 'StudentForm' :
    role === 'Teacher' ? 'TeacherForm' :
    role === 'Parent' ? 'ParentForm' :
    'StudentForm'; // Default fallback

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialScreen} // Set the initial screen dynamically
    >
      <Stack.Screen
        name="StudentForm"
        component={StudentForm}
        options={{ title: 'Student Registration' }}
      />
      <Stack.Screen
        name="TeacherForm"
        component={TeacherForm}
        options={{ title: 'Teacher Registration' }}
      />
      <Stack.Screen
        name="ParentForm"
        component={ParentForm} // Ensure there's a ParentForm component
        options={{ title: 'Parent Registration' }}
      />
    </Stack.Navigator>
  );
};

export default AuthLayout;
