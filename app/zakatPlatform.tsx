import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const zakatPlatforms = [
  {
    name: 'Pusat Pungutan Zakat Majlis Agama Islam Wilayah Persekutuan (PPZ-MAIWP)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrUG1HieEwzoXranB2CKE7TkReWf1PqEhSg&s' },
  },
  {
    name: 'Lembaga Zakat Selangor (LZS)',
    logo: { uri: 'https://themalaysianreserve.com/wp-content/uploads/2022/03/Lembaga-Zakat-Selangor.png' },
  },
  {
    name: 'Lembaga Zakat Negeri Kedah (LZNK)',
    logo: { uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Kedah_State_Zakat_Board.png' },
  },
  {
    name: 'Majlis Agama Islam dan Adat Istiadat Melayu Perlis (MAIPs)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfV7DV4NK22JriRvjqgIPx8pxRG_LQ0PVxA&s' },
  },
  {
    name: 'Zakat Pulau Pinang (ZPP)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3ynimSP-U73n26SYhtZPKVTiuuFFP_YkyA&s' },
  },
  {
    name: 'Majlis Agama Islam dan Adat Melayu Perak (MAIPk)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfV7DV4NK22JriRvjqgIPx8pxRG_LQ0PVxA&s' },
  },
  {
    name: 'Majlis Agama Islam Negeri Sembilan (MAINS)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-x7ELLbKc-URKLtZplfM90_i3RRnS6LhjQ&s' },
  },
  {
    name: 'Majlis Ugama Islam dan Adat Resam Melayu Pahang (MUIP)',
    logo: { uri: 'https://yt3.googleusercontent.com/bQNAziWPjvfFaao563RulYLYl9CQ39q9f6lNDX3nU4sy6IOJaRlOEC1gcaw0Vd4ZSNNwba1p=s900-c-k-c0x00ffffff-no-rj' },
  },
  {
    name: 'Majlis Agama Islam dan Adat Istiadat Melayu Kelantan (MAIK)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tNyL3EUbX2cAA403Hi4Jlehv__LiKPDmLg&s' },
  },
  {
    name: 'Majlis Agama Islam Negeri Johor (MAIJ)',
    logo: { uri: 'https://fitrah.maij.gov.my/Logo%20Majlis%20Agama%20Islam%20Johor%20(MAIJ).png' },
  },
  {
    name: 'Majlis Ugama Islam Negeri Sabah (MUIS)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuyednLKzFalzT-Rd1DE6TKOV6RkOQNUMZQ&s' },
  },
  {
    name: 'Tabung Baitulmal Sarawak (TBS)',
    logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8FIiO7PIzoWpbVi5w0T4hzngxRNuifcKlw&s' },
  },
];

export default function ZakatPlatformScreen() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zakat Platforms</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Zakat Platform</Text>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {zakatPlatforms.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                selectedIndex === index && styles.selectedCard,
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Image source={item.logo} style={styles.logo} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('./zakatType')}>
        <Text style={styles.nextText} >Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2AA484',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 24,
    marginTop: -10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  scrollContainer: {
    paddingBottom: 120,
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedCard: {
    borderColor: '#00a97f',
    backgroundColor: '#e8f7f2',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
    borderRadius: 6,
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#444',
  },
  nextButton: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    backgroundColor: '#00a97f',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
