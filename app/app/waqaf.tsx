import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const campaigns = [
  {
    id: 1,
    title: 'Carpet for Masjid Kampung Keledek',
    image: 'https://www.majalahlabur.com/wp-content/uploads/2019/11/Sejarah-Polisi-Rumah-Mampu-Milik-Di-Malaysia13.jpg',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Waqf Haemodialysis Machine',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWkSqF0-tf6DdMRqPSQgRKMqpoOLhmQ55Mw&s',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Wheelchairs for Hospital Sungai Siput',
    image: 'https://davita.com.my/sites/default/files/styles/wide/public/news/images/Sg%20Siput2.jpg?itok=5uA7iwkO',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Foodbank for in Need',
    image: 'https://nadz.my/wp-content/uploads/2021/06/food-bank.jpeg',
    status: 'Funded',
  },
  {
    id: 5,
    title: 'Van Jenazah for Surau Al-Muttaqin',
    image: 'https://www.utusan.com.my/wp-content/uploads/WhatsApp-Image-2021-07-28-at-8.49.25-PM.jpeg',
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'Water Filter for Rural Area',
    image: 'https://www.familyhandyman.com/wp-content/uploads/2024/08/Install-a-Reverse-Osmosis-Water-Filter_FH07JAU_479_06_028.jpg',
    status: 'Funded',
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
        <Text style={styles.headerTitle}>Waqf</Text>
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
          pathname: './waqafDetail',
          params: {
            urlImage: item.image,
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
    elevation: 2,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
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
