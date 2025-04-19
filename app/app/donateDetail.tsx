import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Payment from './payment';

export default function DonationDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [visible, setVisible] = useState(false);

  // Default values in case params are not provided
  const campaignTitle = typeof params.title === 'string' ? params.title : "Back to School: Bantuan Awal Persekolahan Anak-anak";
  const campaignStatus = typeof params.status === 'string' ? params.status : "Ongoing";
  const imageUrl = typeof params.urlImage === 'string' ? params.urlImage : "https://www.kosmo.com.my/wp-content/uploads/2022/01/murid-sekolah.jpg";

  return (
    <View style={styles.container}>
      {/* 👇 Add opacity wrapper */}
      <View style={{ flex: 1}}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.content}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>
            {campaignTitle} <Ionicons name="checkmark-circle" size={16} color="#2AA484" />
          </Text>

          <View style={styles.tags}>
            <View style={styles.tag}><Text style={styles.tagText}>📍 Pulang</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>👥 10,000</Text></View>
          </View>

          <View style={styles.progressWrapper}>
            <Text style={styles.collected}>Collected: <Text style={{ color: '#F6A723' }}>RM 6,000.00</Text></Text>
            <Text style={styles.remaining}>19 days to go</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>

          <TouchableOpacity style={styles.donateBtn} onPress={() => setVisible(true)}>
            <Text style={styles.donateText}>Donate Now</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Join us in preparing children for a brighter future by contributing to our Back to School Fundraising Campaign.
            This is a form of *sadaqah jariyah*—every book and new school uniform becomes part of your ongoing reward.
          </Text>

          <View style={styles.card}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Vice Chairman Aman NGO</Text>
              <Text style={styles.cardSubtitle}>Successful organization | Active since 2015</Text>
            </View>
          </View>

          <Text style={styles.seeOrg}>See organization full profile</Text>

          <Text style={styles.sectionTitle}>Person In Charge</Text>
          <View style={styles.card}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
            <View>
              <Text style={styles.cardTitle}>Arhim Sukarno</Text>
              <Text style={styles.cardSubtitle}>Vice Chairman NGO</Text>
              <Text style={styles.cardSubtitle}>Contact: 018-2645711</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Fund Management Breakdown</Text>
          <View style={styles.breakdown}><Text>School Clothes</Text><Text>RM 3,500.00</Text></View>
          <View style={styles.breakdown}><Text>Stationery</Text><Text>RM 2,000.00</Text></View>
          <View style={styles.breakdown}><Text>Books</Text><Text>RM 500.00</Text></View>

          <Text style={styles.footnote}>Live updates for this fundraiser</Text>
        </ScrollView>
      </View>

      {/* Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <Payment onClose={() => setVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingBottom: 40,
  },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 10, color: '#333' },
  tags: { flexDirection: 'row', gap: 10, marginBottom: 15 },
  tag: {
    backgroundColor: '#E6F7F3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: { fontSize: 12, color: '#2AA484' },
  progressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  collected: { fontSize: 13, color: '#555' },
  remaining: { fontSize: 13, color: '#555' },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2AA484',
  },
  donateBtn: {
    backgroundColor: '#2AA484',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  donateText: { color: '#fff', fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555', marginBottom: 25 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  cardTitle: { fontWeight: 'bold', fontSize: 14, color: '#333' },
  cardSubtitle: { fontSize: 12, color: '#666' },
  seeOrg: { fontSize: 13, color: '#2AA484', marginBottom: 20 },
  sectionTitle: { fontWeight: 'bold', fontSize: 16, color: '#333', marginBottom: 10 },
  breakdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  footnote: {
    textAlign: 'center',
    fontSize: 13,
    color: '#2AA484',
    marginTop: 20,
  },
});
