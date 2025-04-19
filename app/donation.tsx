import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const campaigns = [
  {
    id: 1,
    title: 'Back to School: Bantuan Awal Persekolahan Anak-anak',
    image: 'https://www.kosmo.com.my/wp-content/uploads/2022/01/murid-sekolah.jpg',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Selangor Prihatin: Bantuan Putra Heights',
    image: 'https://assets.bharian.com.my/images/articles/BH4MULANG_1743741497.jpg',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Food pack: Asnaf dan Fakir Miskin di Malaysia',
    image: 'https://www.majalahlabur.com/wp-content/uploads/2019/11/Sejarah-Polisi-Rumah-Mampu-Milik-Di-Malaysia13.jpg',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Masjid Ubudiah',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/12/e5/a5/ubudiah-mosque.jpg?w=1200&h=-1&s=1',
    status: 'Funded',
  },
  {
    id: 5,
    title: 'SyriaCare: The Mercy Fund',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0apqhSgBycMjvBKBfXasFaBsowGuEYlW8jw&s',
    status: 'Ongoing',
  },
];

export default function DonationScreen() {
const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Donation</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#aaa" />
          <TextInput placeholder="Search campaign" style={styles.searchInput} />
        </View>

        {/* Latest Campaign */}
        <Text style={styles.sectionTitle}>Latest campaign</Text>

        {/* Campaign Grid */}
        <ScrollView contentContainerStyle={styles.grid}>
  {campaigns.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.card}
      onPress={() => {
        router.push({
          pathname: '/donateDetail',
          params: {
            urlImage: item.image,
            title: item.title,
            status: item.status
          },
        });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text numberOfLines={2} style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardStatus}>{item.status}</Text>
    </TouchableOpacity>
  ))}
    </ScrollView>

      </View>

    </View>
  );
}

const cardWidth = (Dimensions.get('window').width - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // optional for nice spacing
    paddingBottom: 100,
  },
  
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 5,
 // required for shadow to appear on iOS

  // Android shadow
  elevation: 5,
  marginBottom: 15,

  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    color: '#333',
  },
  cardStatus: {
    fontSize: 12,
    color: '#2AA484',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  }
});
