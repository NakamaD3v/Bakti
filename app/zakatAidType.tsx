import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const aidTypes = [
  {
    label: 'Monthly Financial Aid',
    icon: 'https://img.icons8.com/ios-filled/50/bank.png',
  },
  {
    label: 'Hari Raya Aid',
    icon: 'https://img.icons8.com/ios-filled/50/moon-symbol.png',
  },
  {
    label: 'Education Aid',
    icon: 'https://img.icons8.com/ios-filled/50/classroom.png',
  },
  {
    label: 'Medical Treatment Aid',
    icon: 'https://img.icons8.com/ios-filled/50/stethoscope.png',
  },
  {
    label: 'House Rental Aid',
    icon: 'https://img.icons8.com/ios-filled/50/home.png',
  },
  {
    label: 'House Repair',
    icon: 'https://img.icons8.com/ios-filled/50/maintenance.png',
  },
  {
    label: 'Emergency Aid',
    icon: 'https://img.icons8.com/ios-filled/50/siren.png',
  },
  {
    label: 'Living Expenses Aid',
    icon: 'https://img.icons8.com/ios-filled/50/wallet.png',
  },
];

export default function AidTypeSelectionScreen() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Your Aid Type</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* White body */}
      <View style={styles.body}>
        <Text style={styles.title}>Select Aid Type</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {aidTypes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionCard,
                selectedIndex === index && styles.selectedCard,
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('/zakatCompleted')}>
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
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2AA484',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
    color: '#333',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2fdf9',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  selectedCard: {
    borderColor: '#2AA484',
    backgroundColor: '#e6f9f3',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 14,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  nextButton: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    backgroundColor: '#2AA484',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
