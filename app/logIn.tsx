import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth"; //must be included
import { auth } from "@/firebaseConfig";//must be included
import { useRouter } from "expo-router";//must be included

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandler = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged in successfully!");
      router.replace("./(tabs)");  // Navigate to Home
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Provide more specific error messages
      if (error.code === 'auth/invalid-email') {
        Alert.alert("Error", "Please enter a valid email address.");
      } else if (error.code === 'auth/user-disabled') {
        Alert.alert("Error", "This account has been disabled.");
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert("Error", "No account found with this email. Please register first.");
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert("Error", "Incorrect password. Please try again.");
      } else {
        Alert.alert("Login Error", "An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#ffffff"}}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Sign In</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: "80%", padding: 10, marginVertical: 10, borderRadius: 5 }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, width: "80%", padding: 10, marginVertical: 10, borderRadius: 5 }}
        secureTextEntry
      />
      <Button title="Login" onPress={loginHandler} />
      <Button title="Go to Register" onPress={() => router.push("/signUp")} />
    </View>
  );
}
