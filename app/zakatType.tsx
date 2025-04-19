import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const zakatTypes = [
  {
    name: 'Income Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/2936/2936758.png' },
  },
  {
    name: 'Business Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135727.png' },
  },
  {
    name: 'Investment Shares Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/4465/4465650.png' },
  },
  {
    name: 'Gold Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/17879/17879858.png' },
  },
  {
    name: 'Silver Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/17155/17155284.png' },
  },
  {
    name: 'Savings Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/2835/2835538.png' },
  },
  {
    name: 'EPF Zakat Calculator',
    icon: { uri: 'https://cdn-icons-png.flaticon.com/128/9529/9529736.png' },
  },
];

export default function ZakatTypeScreen() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Zakat Type</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Zakat Calculator</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {zakatTypes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                selectedIndex === index && styles.selectedCard,
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={()=>{router.push('/zakatCalc')}}>
        <Text style={styles.nextText}>Next</Text>
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
    paddingTop: 40,
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
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
    borderRadius: 6,
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    fontSize: 14,
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
