import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function Form() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [community, setCommunity] = useState('NGO');
  const [contactInfo, setContactInfo] = useState('');
  const [picName, setPicName] = useState('');
  const [picContact, setPicContact] = useState('');
  const isFormValid = name && contactInfo && picName && picContact;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2AA484' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Request Fundraising</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[styles.formContainer, { flexGrow: 1 }]}
          keyboardShouldPersistTaps="handled"
        >
          {/* Step Indicator */}
          <View style={styles.steps}>
            <StepCircle number="1" label="Basic Info" active />
            <StepCircle number="2" label="Fundraiser Details" />
            <StepCircle number="3" label="Verification" />
          </View>

          {/* Name */}
          <TextInput
            placeholder="Name"
            style={styles.input}
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />

          {/* Community Picker */}
          <View style={styles.pickerWrapper}>
            <Text style={styles.pickerLabel}>Community Type</Text>
            {Platform.OS === 'android' ? (
              <View style={styles.androidPickerContainer}>
                <Picker
                  selectedValue={community}
                  onValueChange={(itemValue) => setCommunity(itemValue)}
                  style={styles.androidPicker}
                >
                  <Picker.Item label="NGO" value="NGO" />
                  <Picker.Item label="Community" value="Community" />
                  <Picker.Item label="Individual" value="Individual" />
                  <Picker.Item label="Institution" value="Institution" />
                </Picker>
              </View>
            ) : (
              <Picker
                selectedValue={community}
                onValueChange={(itemValue) => setCommunity(itemValue)}
                style={styles.iosPicker}
              >
                <Picker.Item label="NGO" value="NGO" />
                <Picker.Item label="Community" value="Community" />
                <Picker.Item label="Individual" value="Individual" />
                <Picker.Item label="Institution" value="Institution" />
              </Picker>
            )}
          </View>

          {/* Contact Info */}
          <TextInput
            placeholder="Contact Info"
            style={styles.input}
            placeholderTextColor="#999"
            value={contactInfo}
            onChangeText={setContactInfo}
          />

          {/* PIC Name */}
          <TextInput
            placeholder="PIC Name"
            style={styles.input}
            placeholderTextColor="#999"
            value={picName}
            onChangeText={setPicName}
          />

          {/* PIC Contact */}
          <TextInput
            placeholder="PIC Contact Info"
            style={styles.input}
            placeholderTextColor="#999"
            value={picContact}
            onChangeText={setPicContact}
          />

          {/* Next Button */}
          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.buttonDisabled]}
            onPress={() =>
              router.push({
                pathname: './form2',
                params: {
                  name,
                  type: community,
                  contactInfo,
                  picName,
                  picContact,
                },
              })
            }
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const StepCircle = ({
  number,
  label,
  active = false,
}: {
  number: string;
  label: string;
  active?: boolean;
}) => {
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
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2AA484',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
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
    textAlign: 'center',
  },
  activeStepLabel: {
    color: '#2AA484',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F3F3F3',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  pickerWrapper: {
    marginBottom: 15,
  },
  pickerLabel: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  androidPickerContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    overflow: 'hidden',
  },
  androidPicker: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  iosPicker: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 15,
    height: 150,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2AA484',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
