import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Menu, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

function DropdownMenu({ label, value, onChange, items }) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Button
            mode="outlined"
            onPress={() => setVisible(true)}
            contentStyle={{ justifyContent: 'flex-start' }}
          >
            <Text>
              {value ? items.find((i) => i.value === value)?.label : label}
            </Text>
          </Button>
        }
      >
        {items.map((item) => (
          <Menu.Item
            key={item.value}
            onPress={() => {
              onChange(item.value);
              setVisible(false);
            }}
            title={item.label}
          />
        ))}
      </Menu>
    </View>
  );
}

export default function IncomeZakatCalculatorScreen() {
  const router = useRouter();

  const [year, setYear] = useState(null);
  const [calcType, setCalcType] = useState(null);
  const [nisab, setNisab] = useState('');
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
    <PaperProvider>
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

            <View style={styles.box}>
              <Text style={styles.boxTitle}>Income Zakat Calculation</Text>

              <Text style={styles.label}>Year (Haul)</Text>
              <DropdownMenu
                label='Select Year'
                value={year}
                onChange={setYear}
                items={[
                  { label: '2024', value: '2024' },
                  { label: '2025', value: '2025' },
                ]}
              />

              <Text style={styles.label}>Nisab Amount</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.prefix}>RM</Text>
                <TextInput
                  style={styles.input}
                  value={nisab}
                  onChangeText={setNisab}
                  placeholder="0.00"
                  keyboardType="numeric"
                  placeholderTextColor="#999"
                />
              </View>

              <Text style={styles.label}>Calculation Type</Text>
              <DropdownMenu
                label="Select Type"
                value={calcType}
                onChange={setCalcType}
                items={[
                  { label: 'With Deducted', value: 'withDeducted' },
                  { label: 'Without Deducted', value: 'withoutDeducted' },
                ]}
              />
            </View>

            <View style={styles.box}>
              <Text style={styles.boxTitle}>Income Details</Text>

              {[
                ['Monthly Income', monthlyIncome, setMonthlyIncome],
                ['Yearly Income', yearlyIncome, setYearlyIncome],
                ['Other External Income', externalIncome, setExternalIncome],
                ['Overall Total', overallTotal, setOverallTotal],
              ].map(([label, value, setter], index) => (
                <View key={index} style={styles.inputGroup}>
                  <Text style={styles.label}>{label}</Text>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.prefix}>RM</Text>
                    <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={setter}
                      placeholder="0.00"
                      keyboardType="numeric"
                      placeholderTextColor="#999"
                    />
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.box}>
              <Text style={styles.boxTitle}>Total Income Zakat</Text>

              {[
                ['Zakat Contribution', zakatContribution, setZakatContribution],
                ['Total Income Eligible for Zakat', zakatEligible, setZakatEligible],
                ['Amount Deducted from Zakat Contribution', deductedAmount, setDeductedAmount],
                ['Annual Zakat Total', annualZakat, setAnnualZakat],
                ['Monthly Zakat Total', monthlyZakat, setMonthlyZakat],
              ].map(([label, value, setter], index) => (
                <View key={index} style={styles.inputGroup}>
                  <Text style={styles.label}>{label}</Text>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.prefix}>RM</Text>
                    <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={setter}
                      placeholder="0.00"
                      keyboardType="numeric"
                      placeholderTextColor="#999"
                    />
                  </View>
                </View>
              ))}

              <View style={styles.eligibilityBox}>
                <Text style={styles.eligibilityText}>
                  Eligibility to pay Zakat: {eligibility}
                </Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.payButton}
                onPress={() => router.push('/zakatPay')}
              >
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
    </PaperProvider>
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
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -10,
  },
  scrollContent: { paddingBottom: 120 },
  sectionNote: { fontSize: 14, marginBottom: 8, color: '#555' },
  box: {
    backgroundColor: '#E6F0EC',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  boxTitle: {
    backgroundColor: '#21785B',
    color: '#fff',
    paddingVertical: 8,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    color: '#555',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  prefix: {
    marginRight: 6,
    fontSize: 14,
    color: '#333',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#000',
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
    fontSize: 16,
    color: '#00a97f',
    fontWeight: '500',
  },
  dropdownContainer: {
    zIndex: 1000,
    marginBottom: 16,
  },
});
