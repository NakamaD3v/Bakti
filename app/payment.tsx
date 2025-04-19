import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Local image imports
const paymentMethods = [
  {
    id: 'google',
    name: 'Google Pay',
    icon: require('../assets/icons/googlePay.jpg'),
  },
  {
    id: 'tng',
    name: 'TNG eWallet',
    icon: require('../assets/icons/tngPay.png'),
  },
  {
    id: 'card',
    name: 'Debit/Credit Card',
    icon: require('../assets/icons/debitPay.png'),
  },
  {
    id: 'fpx',
    name: 'Online Banking (FPX)',
    icon: require('../assets/icons/fpxPay.png'),
  },
];

interface PaymentProps {
  onClose?: () => void;
}

export default function PaymentMethodScreen({ onClose }: PaymentProps) {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('google');

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handleClose}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

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
              <Image
                source={method.icon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.optionText}>{method.name}</Text>
            </View>

            {selectedMethod === method.id ? (
              <Ionicons name="radio-button-on" size={20} color="#2AA484" />
            ) : (
              <Ionicons name="radio-button-off" size={20} color="#ccc" />
            )}
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.replace('/paymentCompleted')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingTop: 30,
    flexGrow: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 30,
    marginLeft: 10,
    marginTop: 20,
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
