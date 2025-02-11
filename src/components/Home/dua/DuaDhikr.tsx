import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import HeadderHeading from '../HeadderHeading';
import Paragraph from '../../Paragraph';
import Dua from './Dua';
import Dhikr from './Dhikr';

const DuaDhikr = () => {
  const navigation = useNavigation(); // ✅ Get navigation object

  // ✅ Function to navigate when a Dua is clicked
  const handleNavigate = (dua) => {
    navigation.navigate('DuaDetail', { dua });
  };

  return (
    <ScrollView style={styles.container}>
      <HeadderHeading HeadTitle="Dhikr & Dua’s" />
      <Paragraph paragraph="Add your booking dates according to pricing" />
      {/* ✅ Pass handleNavigate to Dua component */}
      <Dua onPress={handleNavigate} />
      <Dhikr />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default DuaDhikr;
