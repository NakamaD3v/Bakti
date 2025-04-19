import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ZakatEligibilityScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    monthlyIncome: '3000.00',
    freelanceIncome: '500.00',
    mustahglat: '200.00',
    grants: '300.00',
    adequacyLimit: '14580.00',
    additionalLimit: '0.00',
    epf: '11',
    nisab: '0.00',
    hajiSavings: '0.00',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zakat Eligibility Calculator{'\n'}(PPZ-MAIWP)</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <Text style={styles.sectionNote}>Please fill</Text>

          {/* Section: Multiple Income Details */}
          <Section title="Multiple Income Details">
            {[
              ['Monthly Income', 'monthlyIncome'],
              ['Freelance Income', 'freelanceIncome'],
              ['Al-Mustahghalat Amount', 'mustahglat'],
              ['Grants/ Contributions', 'grants'],
            ].map(([label, field], index) => (
              <FormRow key={index} label={label} value={form[field]} onChange={(v) => handleChange(field, v)} />
            ))}
          </Section>

          {/* Section: Adequacy limit Deductions */}
          <Section title="Adequacy limit Deductions">
            <FormRow
              label="Household Adequacy Limit"
              value={form.adequacyLimit}
              onChange={(v) => handleChange('adequacyLimit', v)}
            />
            <FormRow
              label="Additional Adequacy Limit (If Applicable)"
              value={form.additionalLimit}
              onChange={(v) => handleChange('additionalLimit', v)}
            />
          </Section>

          {/* Section: EPF */}
          <Section title="EPF Contribution">
            <FormRow
              label="Employee’s EPF Contribution below age of 55"
              value={form.epf}
              onChange={(v) => handleChange('epf', v)}
              suffix="%"
            />
          </Section>

          {/* Section: Results */}
          <Section title="Results of Deductions">
            <FormRow
              label="Nisab Determination (Minimum Threshold)"
              value={form.nisab}
              onChange={(v) => handleChange('nisab', v)}
            />
            <FormRow
              label="Monthly Tabung Haji Savings"
              value={form.hajiSavings}
              onChange={(v) => handleChange('hajiSavings', v)}
            />
          </Section>

          {/* Results */}
          <View style={styles.resultRow}>
            <Text style={styles.resultLabel}>Zakat Applicant Status</Text>
            <View style={styles.resultBox}><Text>-</Text></View>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.resultLabel}>Monthly Zakat Total</Text>
            <View style={styles.resultBox}><Text>RM -</Text></View>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.resultLabel}>Monthly Zakat Total</Text>
            <View style={styles.resultBox}><Text>RM -</Text></View>
          </View>

          {/* Print + Reset */}
          <View style={styles.actionsRow}>
            <TouchableOpacity><Text style={styles.link}>Print</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Reset</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('/supportDoc')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Section Header
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

// RM Input Row
const FormRow = ({
  label,
  value,
  onChange,
  suffix = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
}) => (
  <View style={styles.row}>
    <Text style={styles.prefix}>RM</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      placeholder={label}
    />
    {suffix !== '' && <Text style={styles.suffix}>{suffix}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2AA484',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'center', flex: 1 },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -10,
  },
  scrollContainer: { paddingBottom: 120 },
  sectionNote: { fontSize: 14, marginBottom: 10 },
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  prefix: {
    marginRight: 6,
    fontSize: 14,
    color: '#444',
  },
  suffix: {
    marginLeft: 6,
    fontSize: 14,
    color: '#444',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  resultBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minWidth: 100,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    color: '#00a97f',
    fontWeight: '600',
    fontSize: 14,
  },
  nextButton: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    backgroundColor: '#00a97f',
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
