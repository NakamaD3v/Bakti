import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function FundraiserDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [category, setCategory] = useState('Waqf');
  const [duration, setDuration] = useState('2 months');
  const [type, setType] = useState('Health');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const isFormValid = title && description && amount;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request Fundraising</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Step Indicator */}
        <View style={styles.steps}>
          <StepCircle number="1" label="Basic Info" />
          <StepCircle number="2" label="Fundraiser Details" active />
          <StepCircle number="3" label="Verification" />
        </View>

        {/* Category Toggle */}
        <View style={styles.toggleContainer}>
          {['Waqf', 'Donation'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.toggleButton, category === item && styles.toggleButtonActive]}
              onPress={() => setCategory(item)}
            >
              <Text style={[styles.toggleText, category === item && styles.toggleTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Title */}
        <TextInput
          placeholder="Title"
          style={styles.input}
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />

        {/* Description */}
        <TextInput
          placeholder="Description"
          style={[styles.input, { height: 80 }]}
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Amount & Duration */}
        <View style={styles.row}>
          <TextInput
            placeholder="RM 10,000.00"
            style={[styles.input, styles.halfInput]}
            placeholderTextColor="#999"
            value={amount}
            onChangeText={setAmount}
          />
          <View style={[styles.pickerWrapper, styles.halfInput]}>
            <Picker selectedValue={duration} onValueChange={setDuration}>
              <Picker.Item label="2 months" value="2 months" />
              <Picker.Item label="3 months" value="3 months" />
              <Picker.Item label="6 months" value="6 months" />
            </Picker>
          </View>
        </View>

        {/* Type Picker */}
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={type} onValueChange={setType}>
            <Picker.Item label="Health" value="Health" />
            <Picker.Item label="Education" value="Education" />
            <Picker.Item label="Disaster Relief" value="Disaster" />
          </Picker>
        </View>

        {/* Media Upload (Placeholder) */}
        <TouchableOpacity style={styles.mediaBox}>
          <Text style={{ color: '#999' }}>Add Media</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity
  style={[styles.button, !isFormValid && styles.buttonDisabled]}
  disabled={!isFormValid}
  onPress={() =>
    router.push({
      pathname: '/form3',
      params: {
        // Page 1 params (coming from useLocalSearchParams)
        name: params.name,
        type: params.type,
        contactInfo: params.contactInfo,
        picName: params.picName,
        picContact: params.picContact,

        // Page 2 inputs
        category,
        title,
        description,
        amount,
        duration,
        typeOfFund: type,
      },
    })
  }
>
  <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const StepCircle = ({ number, label, active = false }: { number: string; label: string; active?: boolean }) => {
  return (
    <View style={styles.step}>
      <View style={[styles.stepCircle, active && styles.activeStepCircle]}>
        <Text style={[styles.stepNumber, active && styles.activeStepNumber]}>{number}</Text>
      </View>
      <Text style={[styles.stepLabel, active && styles.activeStepLabel]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
    paddingTop:25,    
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#2AA484',
  },
  stepNumber: {
    color: '#999',
    fontWeight: 'bold',
  },
  activeStepNumber: {
    color: '#fff',
  },
  stepLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#999',
  },
  activeStepLabel: {
    color: '#2AA484',
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#E6F7F3',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#CFF3EA',
  },
  toggleText: {
    color: '#555',
  },
  toggleTextActive: {
    fontWeight: 'bold',
    color: '#2AA484',
  },
  input: {
    backgroundColor: '#F3F3F3',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  pickerWrapper: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  halfInput: {
    flex: 1,
  },
  mediaBox: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2AA484',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
