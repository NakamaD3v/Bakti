import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const notifications = [
  {
    id: '1',
    title: 'Donation has been sent to Unicef.',
    date: '4 Apr 2024',
    highlighted: true,
  },
  {
    id: '2',
    title: 'Your Fundraising Application is successful',
    date: '2 Apr 2024',
    highlighted: true,
  },
  {
    id: '3',
    title: 'You have receive new NFT',
    date: '5 Apr 2024',
    highlighted: true,
  },
  {
    id: '4',
    title: 'Please update your profile',
    subtitle: 'Go to settings',
    date: '1 Apr 2024',
    highlighted: false,
  },
];

export default function NotificationScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.notificationBox, !item.highlighted && styles.lowlight]}>
      <View style={styles.iconWrapper}>
        <Ionicons name="alert-circle-outline" size={24} color="#c2a700" />
      </View>
      <View style={styles.textContent}>
        <Text style={[styles.title, !item.highlighted && { fontWeight: '400' }]}>
          {item.title}
        </Text>
        {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Content */}
      <View style={styles.content}>
  <FlatList
    data={notifications}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
  />
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
    content: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 20,
    },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  notificationBox: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'flex-start',
    elevation: 2,
  },
  lowlight: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconWrapper: {
    marginRight: 12,
    paddingTop: 2,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#007bff',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});
