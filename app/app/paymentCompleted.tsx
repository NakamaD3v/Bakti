import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PaymentCompletedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment Completed</Text>
        <View style={{ width: 24 }} /> {/* spacer for icon alignment */}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.thankYou}>Thank You for Your Contributions!</Text>

        <View style={styles.checkmark}>
          <Ionicons name="checkmark-circle" size={60} color="#2AA484" />
        </View>

        <View style={styles.messageBox}>
          <Text style={styles.supportText}>You’ve helped support:</Text>
          <Text style={styles.boldText}>Back to School: Bantuan Awal Persekolahan Anak-anak</Text>

          <Text style={styles.detail}><Text style={styles.label}>Amount Donated :</Text> <Text style={styles.blue}>RM200.00</Text></Text>
          <Text style={styles.detail}><Text style={styles.label}>Campaign :</Text> Back to School</Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Transaction ID :</Text> <Text style={styles.link}>#DNT-123456</Text>
          </Text>

          <Text style={styles.nftTitle}>Your Appreciation NFT is Ready!</Text>

          <Image
            source={require('@/assets/images/nft.png')}
            style={styles.nftImage}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/nftDetail')} >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  thankYou: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  checkmark: {
    marginVertical: 20,
    alignItems: 'center',
  },
  messageBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
  },
  supportText: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginBottom: 12,
  },
  detail: {
    fontSize: 13,
    color: '#444',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  blue: {
    color: '#2AA484',
    fontWeight: 'bold',
  },
  link: {
    color: '#2AA4FF',
    fontWeight: '600',
  },
  nftTitle: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  },
  nftImage: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#2AA484',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    bottom: 20,
    left: 20,
    right: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
