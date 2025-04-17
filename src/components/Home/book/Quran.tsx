import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BookData from './Data';

const QuranCard = ({ title, image, quran }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('QuranDetail', { dua: quran })} 

    >
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Image source={require('../../../assets/icons/rightarrowblack.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const Quran = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.heading}>Quran</Text>
      <FlatList
        data={BookData}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => <QuranCard title={item.title} image={item.image} quran={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    width: 360,
    height: 70,
  },
  icon: {
    resizeMode: 'contain',
    marginRight: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    flex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Quran;
