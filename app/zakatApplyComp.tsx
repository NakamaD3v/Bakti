import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ZakatConfirmationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request Fund</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* White content */}
      <View style={styles.content}>
        <Text style={styles.successTitle}>
          Thank You for Fulfilling{'\n'}Your Zakat Obligation!
        </Text>

        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={40} color="white" />
        </View>

        <Text style={styles.confirmationTitle}>Payment Confirmation</Text>

        <View style={styles.details}>
          <Text style={styles.label}>
            <Text style={styles.bold}>Your Payment has been processed:</Text>{'\n'}
            Zakat Type: <Text style={styles.normal}>Income Zakat</Text>{'\n'}
            Zakat Platform : <Text style={styles.normal}>PPZ-MAIWP</Text>{'\n'}
            Amount Paid : <Text style={styles.normal}>RM24,00.00</Text>{'\n'}
            Transaction ID :{' '}
            <Text style={styles.link}>#ICZ-123456</Text>{'\n'}
            Payment Method: <Text style={styles.normal}>Internet Banking</Text>
          </Text>
        </View>
      </View>

      {/* Return button */}
      <TouchableOpacity style={styles.returnButton} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.returnText}>Return to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2AA484',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00a97f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  confirmationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  details: {
    width: '100%',
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 14,
    color: '#000',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  normal: {
    fontWeight: 'normal',
    color: '#000',
  },
  link: {
    color: '#00aaff',
    fontWeight: '600',
  },
  returnButton: {
    backgroundColor: '#2AA484',
    paddingVertical: 14,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  returnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
