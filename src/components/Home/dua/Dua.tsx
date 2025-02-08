import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: '1',
    title: 'Sleeping',
    image: require('../../../assets/icons/DuaDhikr/moon.png'),
  }, // Local image
  {
    id: '2',
    title: 'Toilet',
    image: require('../../../assets/icons/DuaDhikr/toilet.png'),
  }, // Remote image
  {
    id: '3',
    title: 'Ablution',
    image: require('../../../assets/icons/DuaDhikr/drops.png'),
  },
  {
    id: '4',
    title: 'Mosque',
    image: require('../../../assets/icons/DuaDhikr/mosque.png'),
  },
  {
    id: '5',
    title: 'Food',
    image: require('../../../assets/icons/DuaDhikr/food.png'),
  },
  {
    id: '6',
    title: 'Travel',
    image: require('../../../assets/icons/DuaDhikr/travel.png'),
  },
];

const DuaCard = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Image
        source={typeof image === 'string' ? {uri: image} : image} // Handles both local & remote images
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Image
        source={require('../../../assets/icons/rightarrowblack.png')} // Always local
        style={styles.arrowIcon}
      />
    </View>
  );
};

const Dua = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.heading}>Dua’s</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <DuaCard title={item.title} image={item.image} />
        )}
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
    resizeMode: 'cover',
    marginRight: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    flex: 1,
  },
  arrowIcon: {
    resizeMode: 'contain',
  },
});

export default Dua;
