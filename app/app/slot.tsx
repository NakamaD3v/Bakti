import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const slotOptions = [
  { id: '1', label: '1 Slot', price: 'RM 20' },
  { id: '2', label: '2 Slot', price: 'RM 40' },
  { id: '3', label: '5 Slot', price: 'RM 100' },
  { id: '4', label: '10 Slot', price: 'RM 200' },
  { id: '5', label: '15 Slot', price: 'RM 300' },
  { id: '6', label: '20 Slot', price: 'RM 400' },
];

export default function Slot({ onClose }: { onClose: () => void }) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selectedSlot) {
      // 👇 Navigate to your next page
      router.push('/paymentWaqf');
      onClose(); // Close the modal after navigation
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Choose your slot :</Text>

        {/* Slot Options */}
        <View style={styles.grid}>
          {slotOptions.map((slot) => {
            const isSelected = selectedSlot === slot.id;
            return (
              <TouchableOpacity
                key={slot.id}
                onPress={() => setSelectedSlot(slot.id)}
                style={[
                  styles.slotBox,
                  isSelected && styles.slotBoxSelected,
                ]}
              >
                <Text
                  style={[
                    styles.slotText,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {slot.label}
                </Text>
                <Text
                  style={[
                    styles.slotPrice,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {slot.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Next Button */}
        {selectedSlot && (
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    height: Dimensions.get('screen').height * 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  slotBox: {
    width: '30%',
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  slotBoxSelected: {
    backgroundColor: '#e1f7f1',
    borderColor: '#2AA484',
  },
  slotText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 13,
  },
  slotPrice: {
    fontSize: 12,
    color: '#2AA484',
  },
  selectedText: {
    color: '#2AA484',
    fontWeight: 'bold',
  },
  nextBtn: {
    marginTop: 15,
    backgroundColor: '#2AA484',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
