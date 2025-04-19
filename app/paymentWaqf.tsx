import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const paymentMethods = [
  {
    id: 'google',
    name: 'Google Pay',
    icon: 'https://static.vecteezy.com/system/resources/previews/025/732/722/non_2x/google-pay-logo-icon-free-vector.jpg',
  },
  {
    id: 'tng',
    name: 'TNG eWallet',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwM75pdCJFZjlEhF-nKJRy5gMtInimcTIvLQ&s',
  },
  {
    id: 'card',
    name: 'Debit Card/Credit Card',
    icon: 'https://cdn-icons-png.flaticon.com/512/633/633611.png',
  },
  {
    id: 'fpx',
    name: 'Online Banking',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmnWBt_EMCHdsCCnit34OxGLFh8sLIJ500A&s',
  },
];

export default function PaymentMethodScreen() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('google');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>

      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.option,
            selectedMethod === method.id && styles.optionSelected,
          ]}
          onPress={() => setSelectedMethod(method.id)}
        >
          <View style={styles.optionLeft}>
            <Image source={{ uri: method.icon }} style={styles.icon} />
            <Text style={styles.optionText}>{method.name}</Text>
          </View>

          {selectedMethod === method.id ? (
            <Ionicons name="radio-button-on" size={20} color="#2AA484" />
          ) : (
            <Ionicons name="radio-button-off" size={20} color="#ccc" />
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.nextButton} onPress={()=>router.push('./waqfCompleted')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 30,
    marginLeft: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 12,
  },
  optionSelected: {
    borderColor: '#2AA484',
    backgroundColor: '#f0fefb',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  nextButton: {
    backgroundColor: '#2AA484',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
