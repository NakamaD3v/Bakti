import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NftDetailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NFT Detail</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* NFT Image */}
        <Image
          source={require('@/assets/images/nft.png')}
          style={styles.nftImage}
        />

        {/* Title */}
        <Text style={styles.congrats}>Congratulations!</Text>
        <Text style={styles.subText}>
          You've received a digital NFT as token of appreciation for your donation contribution.
        </Text>

        {/* Details */}
        <View style={styles.detailsBox}>
          <Text style={styles.detail}><Text style={styles.label}>Campaign Name:</Text> Bantuan Awal Persekolahan</Text>
          <Text style={styles.detail}><Text style={styles.label}>Amount Donated:</Text> RM200.00</Text>
          <Text style={styles.detail}><Text style={styles.label}>Date:</Text> 11 April 2025</Text>
          <Text style={styles.detail}><Text style={styles.label}>Transaction ID:</Text> #DNT-123456</Text>
          <Text style={styles.detail}><Text style={styles.label}>Blockchain Tx Hash:</Text> 0xabc123...def56</Text>
          <Text style={styles.detail}><Text style={styles.label}>NFT ID:</Text> #00123</Text>
          <Text style={styles.detail}><Text style={styles.label}>Stored on:</Text> IPFS/Arweave</Text>
        </View>

        {/* Description */}
        <Text style={styles.descTitle}>Description:</Text>
        <Text style={styles.descText}>
          This NFT was awarded to recognize your donation contribution toward Bantuan Awal Persekolahan.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('./(tabs)')}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  nftImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  congrats: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 13,
    marginBottom: 20,
  },
  detailsBox: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  detail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  descTitle: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  descText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 30,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#2AA484',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
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
