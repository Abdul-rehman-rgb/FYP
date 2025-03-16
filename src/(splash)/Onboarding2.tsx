import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RoleSelect from '../components/RoleSelect';
import ConfirmBtn from '../components/ConfirmBtn';
import Heading from '../components/Heading';

const RoleSelection = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleConfirm = () => {
    if (selectedRole) {
      navigation.navigate('(auth)', { role: selectedRole }); // Ensure 'AuthScreen' is correct
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <Heading heading="What are you looking to be?" />

        {['Student', 'Teacher', 'Parent'].map((role) => (
          <RoleSelect
            key={role}
            Role={role}
            imgSrc={require('../assets/icons/User.png')}
            Desc={
              role === 'Student'
                ? "Access Student Features"
                : role === 'Teacher'
                ? "Manage Teaching Resources"
                : "Monitor Your Child's Progress"
            }
            onPress={() => handleRoleSelect(role)}
            isSelected={selectedRole === role} // Highlight selected role
          />
        ))}

        <ConfirmBtn title="Confirm" handlePress={handleConfirm} disabled={!selectedRole} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center the content when few options
  },
});
