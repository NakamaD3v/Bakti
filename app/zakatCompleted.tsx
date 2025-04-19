import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ZakatAidConfirmationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fundraising Application</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Ionicons name="checkmark" size={32} color="white" />
        </View>

        <Text style={styles.confirmTitle}>
          Your Zakat Aid{'\n'}application is being processed
        </Text>

        <Text style={styles.confirmSub}>
          We will notify you through when{'\n'}
          there is an update on the status of{'\n'}
          your application
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.completeButton} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.completeText}>Complete</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2AA484' },

  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2AA484',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginTop: -10,
  },

  iconWrapper: {
    backgroundColor: '#2AA484',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  confirmTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },

  confirmSub: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  completeButton: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    backgroundColor: '#2AA484',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  completeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
