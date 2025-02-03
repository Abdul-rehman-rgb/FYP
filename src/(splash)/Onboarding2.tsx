import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
      navigation.navigate('(auth)', { role: selectedRole });
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <Heading heading="What are you looking to be?" />

        <RoleSelect
          Role="Student"
          imgSrc={require('../assets/icons/User.png')}
          Desc="Access Student Features"
          onPress={() => handleRoleSelect('Student')}
        />

        <RoleSelect
          Role="Teacher"
          imgSrc={require('../assets/icons/User.png')}
          Desc="Manage Teaching Resources"
          onPress={() => handleRoleSelect('Teacher')}
        />

        <RoleSelect
          Role="Parent"
          imgSrc={require('../assets/icons/User.png')}
          Desc="Monitor Your Child's Progress"
          onPress={() => handleRoleSelect('Parent')}
        />

        <ConfirmBtn
          title="Confirm"
          handlePress={handleConfirm}
          disabled={!selectedRole}
        />
      </ScrollView>
    </View>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
