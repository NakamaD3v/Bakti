import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SupportingDocumentsScreen() {
  const router = useRouter();

  const documents = [
    'IC',
    'Payslip',
    'Medical/Police Reports',
    'Bank Statement',
    'Bank QR code',
    'Registration Certificates',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Supporting Documents</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.instruction}>
            Please Upload Your Supporting Documents
          </Text>

          <View style={styles.grid}>
            {documents.map((doc, index) => (
              <TouchableOpacity key={index} style={styles.uploadBox}>
                <Ionicons name="document-outline" size={18} color="#000" />
                <Text style={styles.uploadText}>{doc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('/zakatAidType')}>
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -10,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  instruction: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: '48%',
    backgroundColor: '#E0F2F1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
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
