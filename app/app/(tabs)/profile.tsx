import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {app} from '@/firebaseConfig';

const nftCards = [
  { id: '1', title: 'Donor of Mosque Carpet', code: '#5481' },
  { id: '2', title: 'Donor of Medical Equipment', code: '#5484' },
  { id: '3', title: 'Donor of School Kit', code: '#5487' },
];

const impactStats = [
  { label: 'Campaigns Supported', value: 15 },
  { label: 'Mosques Helped', value: 8 },
  { label: 'Country Reached', value: 3 },
];

export default function ProfileScreen() {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        })
    
        return () => unsubscribe();
    
      }, []);


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.avatar}
        />
        {user ? (
                  <View style={{alignItems:'center'}}>
                    <Text style={styles.name}>{user.displayName ?? 'User'}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                  </View>
                ) : (
                  <View style={{alignItems:'center'}}>
                    <Text style={styles.name}>Users</Text>
                    <Text style={styles.email}>No email provided</Text>
                  </View>
                )}
      </View>

      {/* Total Donation Box */}
      <View style={styles.donationCard}>
        <Text style={styles.donationLabel}>Total Donation Contributed</Text>
        <Text style={styles.donationAmount}>RM 5,200.00</Text>
        <Text style={styles.historyLink}>Click & History</Text>
      </View>

      {/* NFT Collection */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>NFT Collection</Text>
        <Ionicons name="chevron-forward" size={18} color="#333" />
      </View>
      <FlatList
        horizontal
        data={nftCards}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.nftCard}>
            <Text style={styles.nftTitle}>{item.title}</Text>
            <Text style={styles.nftCode}>{item.code}</Text>
          </View>
        )}
      />

      {/* Impact Summary */}
      <Text style={[styles.sectionTitle, { marginHorizontal: 15, marginTop: 40}]}>
        Impact Summary
      </Text>
      <View style={styles.impactBox}>
        {impactStats.map((stat, index) => (
          <View key={index} style={styles.impactCard}>
            <Text style={styles.impactValue}>{stat.value}</Text>
            <Text style={styles.impactLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  donationCard: {
    backgroundColor: '#157A6E',
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 15,
    marginBottom: 40,
  },
  donationLabel: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
  donationAmount: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  historyLink: {
    color: '#C0FF91',
    marginTop: 5,
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  nftCard: {
    width: 160,
    height: 90,
    backgroundColor: '#F9F9F9',
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 3,
  },
  nftTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  nftCode: {
    fontSize: 12,
    color: '#666',
  },
  impactBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#157A6E',
    marginHorizontal: 15,
    borderRadius: 12,
    paddingVertical: 20,
    marginTop: 10,
  },
  impactCard: {
    alignItems: 'center',
  },
  impactValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  impactLabel: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
