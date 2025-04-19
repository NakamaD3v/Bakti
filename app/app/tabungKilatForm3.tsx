import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { getFirestore, doc, setDoc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { ActivityIndicator } from 'react-native';

export default function FundraisingVerificationScreen() {
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const {
        name,
        type,
        icNum,
        contactInfo,
        title,
        description,
        amount,
        duration,
      } = useLocalSearchParams();
  const router = useRouter();

  // Check authentication status when component mounts
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      Alert.alert(
        "Authentication Required", 
        "You need to sign in to access this page.",
        [
          {
            text: "OK",
            onPress: () => router.back()
          }
        ]
      );
      router.back();
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const docs = [
    'IC',
    'Payslip',
    'Medical/Police Reports',
    'Bank Statement',
    'Bank QR code',
    'Registration Certificates',
  ];

  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);

  const toggleSelection = (doc: string) => {
    setSelectedDocs((prev) =>
      prev.includes(doc)
        ? prev.filter((d) => d !== doc) // remove if already selected
        : [...prev, doc] // add if not selected
    );
  };

  const handleComplete = async () => {
    if (!isAuthenticated) {
      Alert.alert(
        "Authentication Required", 
        "You need to sign in to complete this action. Please sign in and try again.",
        [
          {
            text: "OK",
            onPress: () => router.back()
          }
        ]
      );
      return;
    }

    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      const submissionData = {
        name,
        type,
        icNum,
        contactInfo,
        title,
        description,
        amount,
        duration,
        documents: selectedDocs,
      };

      const db = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert(
          "Authentication Required", 
          "You need to sign in to complete this action. Please sign in and try again.",
          [
            {
              text: "OK",
              onPress: () => {
                setLoading(false);
                router.back();
              }
            }
          ]
        );
        return;
      }

      const userDocRef = doc(db, "UserRecordForm", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        await updateDoc(userDocRef, {
          requestTabungKilat: arrayUnion({
            name: submissionData.name,
            type: submissionData.type,
            icNum: submissionData.icNum,
            contactInfo: submissionData.contactInfo,
            title: submissionData.title,
            description: submissionData.description,
            amount: submissionData.amount,
            duration: submissionData.duration,
            documents: submissionData.documents,
            timeStamp: new Date()
          }),
        });
      } else {
        await setDoc(userDocRef, {
          requestTabungKilat: [
            {
              name: submissionData.name,
              type: submissionData.type,
              icNum: submissionData.icNum,
              contactInfo: submissionData.contactInfo,
              title: submissionData.title,
              description: submissionData.description,
              amount: submissionData.amount,
              duration: submissionData.duration,
              documents: submissionData.documents,
              timeStamp: new Date()
            },
          ],
        });
      }

      router.replace('/completeKilatForm');
    }
    catch(err){
      console.error("Error in handleComplete:", err);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request Tabung Kilat</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.steps}>
          <StepCircle number="1" label="Basic Info" />
          <StepCircle number="2" label="Fundraiser Details" />
          <StepCircle number="3" label="Verification" active />
        </View>

        <Text style={styles.uploadTitle}>Upload your verification documents</Text>

        <View style={styles.grid}>
          {docs.map((doc, index) => {
            const isSelected = selectedDocs.includes(doc);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => toggleSelection(doc)}
                style={[
                  styles.uploadBox,
                  isSelected && styles.uploadBoxSelected,
                ]}
              >
                <Ionicons
                  name="document-outline"
                  size={20}
                  color={isSelected ? '#fff' : '#2AA484'}
                />
                <Text
                  style={[
                    styles.docText,
                    isSelected && styles.docTextSelected,
                  ]}
                >
                  {doc}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.8, paddingVertical: 12 }]}
          onPress={handleComplete}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Complete</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const StepCircle = ({ number, label, active = false }: { number: string; label: string; active?: boolean }) => {
  return (
    <View style={styles.step}>
      <View style={[styles.stepCircle, active && styles.activeStepCircle]}>
        <Text style={[styles.stepNumber, active && styles.activeStepNumber]}>{number}</Text>
      </View>
      <Text style={[styles.stepLabel, active && styles.activeStepLabel]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA484',
    paddingTop: 25,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flexGrow: 1,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  step: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#2AA484',
  },
  stepNumber: {
    color: '#999',
    fontWeight: 'bold',
  },
  activeStepNumber: {
    color: '#fff',
  },
  stepLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#999',
  },
  activeStepLabel: {
    color: '#2AA484',
    fontWeight: 'bold',
  },
  uploadTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: '48%',
    backgroundColor: '#E6F7F3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  uploadBoxSelected: {
    backgroundColor: '#2AA484',
  },
  docText: {
    color: '#333',
    flexShrink: 1,
  },
  docTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2AA484',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
