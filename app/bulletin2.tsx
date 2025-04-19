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
              source={{ uri: 'https://www.wilayahku.com.my/canon/uploads/2023/10/IMG-20220308-WA0119.jpg' }} // Replace with your own image URL
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.overlayTitle}>SyriaCare: The Mercy Fund</Text>
              <Text style={styles.metaText}>A secure and trusted campaign</Text>
              <Text style={styles.metaText}>Published on 17 Apr 2024</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>🕊️ SyriaCare: The Mercy Fund</Text>
          <Text style={styles.paragraph}>
            For over a decade, the people of Syria have endured unimaginable hardship — war, displacement, poverty, and the constant struggle to survive.
          </Text>
          <Text style={styles.paragraph}>
            The Mercy Fund is our response — a compassionate, continuous aid initiative under SyriaCare that channels urgent support to where it’s needed most:
          </Text>
          <Text style={styles.paragraph}>💧 Clean water</Text>
          <Text style={styles.paragraph}>🍞 Food baskets</Text>
          <Text style={styles.paragraph}>💊 Medical aid</Text>
          <Text style={styles.paragraph}>📚 School supplies and orphan sponsorship</Text>
          <Text style={styles.paragraph}>🏠 Shelter and winter essentials</Text>
          <Text style={styles.paragraph}>
            By contributing to The Mercy Fund, you are helping provide life-saving relief and long-term hope to thousands of Syrians — mothers, fathers, children — who have suffered for far too long. Let your mercy reach them.
          </Text>
          <Text style={styles.paragraph}>
            Together, let’s keep the light of hope burning.
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
