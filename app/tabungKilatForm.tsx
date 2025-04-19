import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function Form() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [community, setCommunity] = useState('NGO');
  const [contactInfo, setContactInfo] = useState('');
  const [icNum, setIcNum] = useState('');
  const isFormValid = name && contactInfo && icNum;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request Tabung Kilat</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.formContainer}>
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

        {/* Ic Number */}
        <TextInput
          placeholder="IC Number"
          style={styles.input}
          placeholderTextColor="#999"
          value={icNum}
          onChangeText={setIcNum}
        />

        {/* Community Picker */}
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Community Type</Text>
          {Platform.OS === 'android' ? (
            <View style={styles.androidPickerContainer}>
              <Picker
                selectedValue={community}
                onValueChange={(itemValue) => setCommunity(itemValue)}
                style={styles.iosPicker}
              >
                <Picker.Item style={styles.buttonText} label="NGO" value="NGO" />
                <Picker.Item style={styles.buttonText} label="Community" value="Community" />
                <Picker.Item style={styles.buttonText} label="Individual" value="Individual" />
                <Picker.Item style={styles.buttonText} label="Institution" value="Institution" />
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

        {/* Next Button */}
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          onPress={() =>
            router.push({
              pathname: './tabungKilatForm2',
              params: {
                name,
                type: community,
                icNum,
                contactInfo,
              },
            })
          }
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
    paddingTop: 25,
  },
  buttonDisabled: {
    backgroundColor: '#2aa484',
    opacity: 0.7,
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
    flexGrow: 1,
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
  // NEW STYLES BELOW
  pickerWrapper: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '555',
    marginBottom: 6,
  },
  androidPickerContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    overflow: 'hidden',
  },
  androidPicker: {
    height: 50,
    color: '#555',
    width: '100%',
  },
  iosPicker: {
    backgroundColor: '#2AA484',
    opacity: 0.8,
    color: '#555',
    borderRadius: 10,
    height: 150, // taller for iOS scroll wheel
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2AA484',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
