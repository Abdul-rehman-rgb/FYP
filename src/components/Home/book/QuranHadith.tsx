import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import HeadderHeading from '../HeadderHeading';
import Paragraph from '../../Paragraph';
import Dua from './Quran';
import Dhikr from './Hadith';

const QuranHadith = () => {
  const navigation = useNavigation(); // ✅ Get navigation object

  // ✅ Function to navigate when a Dua is clicked
  const handleNavigate = (quran) => {
    navigation.navigate('QuranDetail', { quran });
  };

  return (
    <ScrollView style={styles.container}>
      <HeadderHeading HeadTitle="Quran & Hadith’s" />
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

export default QuranHadith;
