import {
    View,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import HeadderHeading from '../HeadderHeading';
  import Paragraph from '../../Paragraph';
import Dua from './Dua';
import Dhikr from './Dhikr';

  const DuaDhikr = () => {
    return (
      <ScrollView style={styles.container}>
        <HeadderHeading HeadTitle="Dhikr & Dua’s" />
        <Paragraph paragraph="Add your booking dates according to pricing" />
        <Dua />
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