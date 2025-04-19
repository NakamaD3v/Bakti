import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function IncomeZakatCalculatorScreen() {
  const router = useRouter();

  const [year, setYear] = useState('');
  const [nisab, setNisab] = useState('');
  const [calcType, setCalcType] = useState('');

  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [yearlyIncome, setYearlyIncome] = useState('');
  const [externalIncome, setExternalIncome] = useState('');
  const [overallTotal, setOverallTotal] = useState('');

  const [zakatEligible, setZakatEligible] = useState('');
  const [zakatContribution, setZakatContribution] = useState('');
  const [deductedAmount, setDeductedAmount] = useState('');
  const [annualZakat, setAnnualZakat] = useState('');
  const [monthlyZakat, setMonthlyZakat] = useState('');
  const [eligibility, setEligibility] = useState('Eligible');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Income Zakat Calculator</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionNote}>Please fill</Text>

          {/* Section 1: Income Zakat Calculation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Income Zakat Calculation</Text>
            <TextInput
              style={styles.input}
              value={year}
              onChangeText={setYear}
              placeholder="Year (Hijri)"
            />
            <View style={styles.inputGroup}>
              <Text style={styles.prefix}>RM</Text>
              <TextInput
                style={styles.inputInner}
                value={nisab}
                onChangeText={setNisab}
                placeholder="Nisab Amount"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={calcType}
                onValueChange={(itemValue) => setCalcType(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Calculation Type" value="" />
                <Picker.Item label="Standard" value="standard" />
                <Picker.Item label="Simple" value="simple" />
              </Picker>
            </View>
          </View>

          {/* Section 2: Income Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Income Details</Text>
            {[
              ['Monthly Income', monthlyIncome, setMonthlyIncome],
              ['Yearly Income', yearlyIncome, setYearlyIncome],
              ['Other External Income', externalIncome, setExternalIncome],
              ['Overall Total', overallTotal, setOverallTotal],
            ].map(([label, value, setter], index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.prefix}>RM</Text>
                <TextInput
                  style={styles.inputInner}
                  value={value}
                  onChangeText={setter}
                  placeholder={label}
                  keyboardType="numeric"
                />
              </View>
            ))}
          </View>

          {/* Section 3: Total Income Zakat */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Total Income Zakat</Text>
            {[
              ['Zakat Contribution', zakatContribution, setZakatContribution],
              ['Total Income Eligible for Zakat', zakatEligible, setZakatEligible],
              ['Zakat Contribution', zakatContribution, setZakatContribution],
              ['Amount Deducted from Zakat Contribution', deductedAmount, setDeductedAmount],
              ['Annual Zakat Total', annualZakat, setAnnualZakat],
              ['Monthly Zakat Total', monthlyZakat, setMonthlyZakat],
            ].map(([label, value, setter], index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.prefix}>RM</Text>
                <TextInput
                  style={styles.inputInner}
                  value={value}
                  onChangeText={setter}
                  placeholder={label}
                  keyboardType="numeric"
                />
              </View>
            ))}
            <View style={styles.eligibilityBox}>
              <Text style={styles.eligibilityText}>Eligibility to pay Zakat: {eligibility}</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.payButton} onPress={()=>router.push('/zakatPay')}>
              <Text style={styles.buttonText}>Pay Zakat</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -10,
  },
  scrollContent: { paddingBottom: 120 },
  sectionNote: { fontSize: 14, marginBottom: 8 },
  section: { marginBottom: 24 },
  sectionTitle: {
    backgroundColor: '#2AA484',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    fontSize: 14,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  prefix: {
    marginRight: 6,
    fontSize: 14,
    color: '#444',
  },
  inputInner: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: Platform.OS === 'ios' ? '#f9f9f9' : '#fff',
  },
  picker: {
    height: 44,
    width: '100%',
  },
  eligibilityBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f0fdf8',
  },
  eligibilityText: {
    color: '#00a97f',
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  payButton: {
    backgroundColor: '#00a97f',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  linkText: {
    fontSize: 14,
    color: '#00a97f',
    fontWeight: '500',
  },
});
