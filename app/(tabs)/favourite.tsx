import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const favourites = [
  {
    id: '1',
    title: 'Carpet for Masjid Kampung Keledek',
    image: 'https://via.placeholder.com/150',
    amount: 'RM 20.00',
    progress: 0.8,
  },
  {
    id: '2',
    title: 'Bantu Banjir Batu Pahat',
    image: 'https://via.placeholder.com/150',
    amount: 'RM 35.00',
    progress: 0.6,
  },
  {
    id: '3',
    title: 'MySarawak: Daily Necessity',
    image: 'https://via.placeholder.com/150',
    amount: 'RM 15.00',
    progress: 0.3,
  },
  {
    id: '4',
    title: 'WWF: Animal Shelter',
    image: 'https://via.placeholder.com/150',
    amount: 'RM 50.00',
    progress: 0.5,
  },
];

export default function FavouritesScreen() {
  const router = useRouter();
  const renderItem = ({ item }: { item: typeof favourites[0] }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/donateDetail')}
>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourites</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'center' }}
        renderItem={renderItem}
      />
    </View>
  );
}

const cardWidth = (Dimensions.get('window').width - 80) / 2; // gives space between


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
    paddingHorizontal: 10, // shorthand for left & right
    paddingTop: 10,   // shorthand for top & bottom
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  grid: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingBottom: 100,
    flex: 1,
    gap: 30,
    alignSelf: 'center'
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    
  },
  image: {
    width: '100%',
    height: 90,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 12,
    color: '#2AA484',
    marginVertical: 5,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2AA484',
  },
});
