import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ZakatPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zakat</Text>
        <View style={{ width: 24 }} /> {/* spacer for layout balance */}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to Zakat Page!</Text>

        <Image
          source={require('@/assets/images/bakti-logo.png')} // Make sure this exists in assets/images
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.question}>What activity are you going to conduct?</Text>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('/zakatPlatform')}>
          <Text style={styles.buttonText}>Pay Zakat Obligation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('/zakatPlatform2')}>
          <Text style={styles.buttonText}>Apply Zakat Aid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#2AA484',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
