// File: app/donation-details.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DonationDetails() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View>
          <TouchableOpacity style={styles.backButton} onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: 'https://themalaysianreserve.com/wp-content/uploads/2020/10/FW1085217_SB07_06102020__BANJIR_KB-lpr.jpg' }} // Replace with your own image URL
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.overlayTitle}>Disaster: Flood in Kampung Keledak</Text>
              <Text style={styles.metaText}>By the Admin and Bakti Team</Text>
              <Text style={styles.metaText}>Published on 14 Apr 2024</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Emergency Appeal: Kampung Keledek Flood Relief</Text>
          <Text style={styles.paragraph}>
            Kampung Keledek has been hit by unexpected and heavy floods following continuous rainfall over the past few days.
            The disaster has damaged homes, roads, and essential facilities, forcing many families to evacuate.
          </Text>
          <Text style={styles.paragraph}>
            Most residents are currently in need of immediate assistance—clean water, dry food, clothing, hygiene kits,
            and temporary shelter. Some families have lost everything and are struggling to get back on their feet.
          </Text>
          <Text style={styles.paragraph}>
            We are launching this campaign to provide emergency relief and long-term recovery support to those affected.
            Your donation, no matter how small, can bring hope and aid to our brothers and sisters in need.
          </Text>
          <Text style={styles.paragraph}>
            Together, let's help Kampung Keledek rise again.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  
  backButton: {
      marginTop: 16,
      marginLeft: 16,
      padding: 15,
  },
  
  headerContent: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#5DB075',
    width: '100%',
    padding: 16,
  },
  overlayTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  donateButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 6,
    marginBottom: 6,
  },
  donateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  metaText: {
    color: '#e6e6e6',
    fontSize: 12,
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
    color: '#333',
  },
});
