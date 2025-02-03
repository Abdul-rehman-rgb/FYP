import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {ProgressBar, MD3Colors} from 'react-native-paper';

const Progress = () => {
  const progressValue = 0.25;

  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <Text style={styles.title}>Discover Quran Facts Quiz</Text>
          <Text style={styles.questions}>Questions – 20</Text>
          <View style={styles.dueContainer}>
            <Text style={styles.dueText}>⏰ Due: 25 Jan 2025</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/Preview.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.progressWrapper}>
        <ProgressBar
          progress={progressValue}
          color={MD3Colors.primary50}
          style={styles.progressBar}
        />
        <Text style={styles.percentageText}>{Math.round(progressValue * 100)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#0C6844',
    flexDirection: 'column',
    width: Dimensions.get('window').width - 32,
    alignSelf: 'center',
    marginRight: 10,
    marginVertical: 25
  },
  card: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 31,
  },
  questions: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
    fontWeight: '500',
  },
  dueContainer: {
    backgroundColor: '#000',
    padding: 7,
    borderRadius: 30,
    marginTop: 5,
  },
  dueText: {
    fontSize: 14,
    color: '#ffffff',
  },
  image: {
    resizeMode: 'contain',
    width: 121,
    height: 100,
    marginLeft: 10,
  },
  progressWrapper: {
    marginTop: 10,
    position: 'relative',
  },
  progressBar: {
    height: 12,
    borderRadius: 6,
  },
  percentageText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
    top: -5,
    left: 55,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 100
  },
});

export default Progress;
