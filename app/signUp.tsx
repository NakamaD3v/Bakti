import { Text, TextInput, View, Alert, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { useState } from "react";
import { app } from "@/firebaseConfig"; 
import { useRouter } from "expo-router";

export default function Register() {
  const [username, setUsername] = useState(""); // New state for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const auth = getAuth(app);

  const registerHandler = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      // Show loading state or disable button here if needed
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Set username in Firebase Auth
      await updateProfile(user, { displayName: username });

      Alert.alert("Success", "User registered successfully!");
      
      // Navigate to login with correct path
      router.replace("/logIn");
    } catch (err: any) {
      console.error("Registration error:", err);
      
      // Check if it's a Firebase error
      if (err.code) {
        // Provide more specific error messages
        if (err.code === 'auth/email-already-in-use') {
          Alert.alert("Error", "This email is already registered. Please use a different email or sign in.");
        } else if (err.code === 'auth/invalid-email') {
          Alert.alert("Error", "Please enter a valid email address.");
        } else if (err.code === 'auth/weak-password') {
          Alert.alert("Error", "Password is too weak. Please use a stronger password.");
        } else {
          Alert.alert("Registration Error", `An error occurred: ${err.message || 'Unknown error'}`);
        }
      } else {
        Alert.alert("Registration Error", "An unknown error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Register New User
      </Text>

      {/* Username Input */}
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "80%",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />

      {/* Email Input */}
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "80%",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "80%",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
        secureTextEntry
      />

      {/* Register Button */}
      <View style={{ marginTop: 10, width: "80%" }}>
        <Button title="Register" onPress={registerHandler} />
      </View>

      {/* Sign In Button */}
      <View style={{ marginTop: 10, width: "80%" }}>
        <Button title="Sign In" onPress={() => router.replace("/logIn")} color="gray" />
      </View>
    </View>
  );
}
