import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PayZakatScreen() {
  const router = useRouter();

  const [selectedAmount, setSelectedAmount] = useState('monthly');
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pay Zakat</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* White content area */}
      <View style={styles.content}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Amount Selection */}
          <Text style={styles.label}>Choose Your Payment Amount</Text>
          <View style={styles.selectionGroup}>
            <TouchableOpacity
              style={[
                styles.amountCard,
                selectedAmount === 'monthly' && styles.selectedCard,
              ]}
              onPress={() => setSelectedAmount('monthly')}
            >
              <Text style={styles.amountText}>RM 2,000.00</Text>
              <Text style={styles.subText}>per month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.amountCard,
                selectedAmount === 'yearly' && styles.selectedCard,
              ]}
              onPress={() => setSelectedAmount('yearly')}
            >
              <Text style={styles.amountText}>RM 24,000.00</Text>
              <Text style={styles.subText}>per year</Text>
            </TouchableOpacity>
          </View>

          {/* Payment Method Selection */}
          <Text style={styles.label}>Choose Payment Method</Text>

          <TouchableOpacity
            style={[
              styles.methodCard,
              selectedMethod === 'fpx' && styles.selectedCard,
            ]}
            onPress={() => setSelectedMethod('fpx')}
          >
            <Text style={styles.methodText}>
              Internet Banking/ Debit Card/ Islamic Credit Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.methodCard,
              selectedMethod === 'ewallet' && styles.selectedCard,
            ]}
            onPress={() => setSelectedMethod('ewallet')}
          >
            <Text style={styles.methodText}>Electronic Wallet (E-Wallet)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.methodCard,
              selectedMethod === 'salary' && styles.selectedCard,
            ]}
            onPress={() => setSelectedMethod('salary')}
          >
            <Text style={styles.methodText}>
              Online Salary Deduction (PPZ-MAIWP)
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={()=>router.push('/zakatApplyComp')}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
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
    padding: 16,
    marginTop: -10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  selectionGroup: {
    marginBottom: 20,
  },
  amountCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  methodCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  selectedCard: {
    borderColor: '#00a97f',
    backgroundColor: '#e6f9f3',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00a97f',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  methodText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  proceedButton: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    backgroundColor: '#00a97f',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
