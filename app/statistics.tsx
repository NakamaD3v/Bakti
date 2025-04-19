import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StatisticsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Statistics</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Collection Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collection This Month</Text>
          <Image
            source={require('@/assets/images/pieChart.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Distribution Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Distribution This Month</Text>
          <Image
            source={require('@/assets/images/pieChart2.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
    paddingTop: Platform.OS === 'ios' ? 60 : 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    alignItems: 'center',
  },
  section: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300, // Adjust based on image aspect ratio
  },
});
