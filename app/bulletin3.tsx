// File: app/donation-details.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function DonationDetails() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: 'https://www.hopeww.org.my/wp-content/uploads/2023/11/23-1080x675.jpg' }} // Replace with your own image URL
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.overlayTitle}>Orang Asli Outreach: Medical & Education</Text>
              <Text style={styles.metaText}>By the Admin and Bakti Team</Text>
              <Text style={styles.metaText}>Published on 19 Apr 2024</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Empowering Indigenous Lives through Health & Learning</Text>
          <Text style={styles.paragraph}>
          The Orang Asli communities in Malaysia have long faced barriers in accessing basic healthcare and quality education.
  Many villages are located in remote areas with limited infrastructure, making it difficult for residents to receive
  timely medical attention and continuous learning opportunities.
          </Text>
          <Text style={styles.paragraph}>
          Our outreach team is working closely with local volunteers and health professionals to deliver mobile medical clinics,
  provide health screenings, distribute hygiene kits, and run educational programs for children and youth. We're also
  equipping village educators with teaching supplies and learning materials to foster sustainable knowledge growth.
          </Text>
          <Text style={styles.paragraph}>With your generous support, we aim to expand our efforts to more remote villages and deliver long-lasting impact.
          Your donation helps fund transportation, medical equipment, educational kits, and logistics for our volunteer teams.</Text>
          <Text style={styles.paragraph}>
            By contributing to The Mercy Fund, you are helping provide life-saving relief and long-term hope to thousands of Syrians — mothers, fathers, children — who have suffered for far too long. Let your mercy reach them.
          </Text>
          <Text style={styles.paragraph}>
          Join us in uplifting our indigenous brothers and sisters through health and education.
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
    marginBottom: 12,
    color: '#333',
  },
});
