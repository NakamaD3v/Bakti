import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const renderScreenHeader = (title: string) => ({
    headerTitle: () => <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>,
  });

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false, animation: 'slide_from_left' }} />
        <Stack.Screen name="form" options={{ headerShown: false }} />
        <Stack.Screen name="form2" options={{ headerShown: false }} />
        <Stack.Screen name="form3" options={{ headerShown: false }} />
        <Stack.Screen name="tabungKilatForm" options={{ headerShown: false }} />
        <Stack.Screen name="tabungKilatForm2" options={{ headerShown: false }} />
        <Stack.Screen name="tabungKilatForm3" options={{ headerShown: false }} />
        <Stack.Screen name="donation" options={{ headerShown: false }} />
        <Stack.Screen name="donateDetail" options={{ headerShown: false }} />
        <Stack.Screen name="payment" options={{ headerShown: false }} />
        <Stack.Screen name="paymentCompleted" options={{ headerShown: false }} />
        <Stack.Screen name="nftDetail" options={{ headerShown: false }} />
        <Stack.Screen name="zakat" options={{ headerShown: false }} />
        <Stack.Screen name="zakatPlatform" options={{ headerShown: false }} />
        <Stack.Screen name="zakatType" options={{ headerShown: false }} />
        <Stack.Screen name="zakatCalc" options={{ headerShown: false }} />
        <Stack.Screen name="zakatPay" options={{ headerShown: false }} />
        <Stack.Screen name="zakatApplyComp" options={{ headerShown: false }} />
        <Stack.Screen name="zakatPlatform2" options={{ headerShown: false }} />
        <Stack.Screen name="zakatEligibilityCalc" options={{ headerShown: false }} />
        <Stack.Screen name="supportDoc" options={{ headerShown: false }} />
        <Stack.Screen name="zakatAidType" options={{ headerShown: false }} />
        <Stack.Screen name="zakatCompleted" options={{ headerShown: false }} />
        <Stack.Screen name="chatbot" options={{ headerShown: false }} />
        <Stack.Screen name="bulletin1" options={{ headerShown: false }} />
        <Stack.Screen name="bulletin2" options={{ headerShown: false }} />
        <Stack.Screen name="bulletin3" options={{ headerShown: false }} />
        <Stack.Screen name="waqaf" options={{ headerShown: false }} />
        <Stack.Screen name="waqafDetail" options={{ headerShown: false }} />
        <Stack.Screen name="paymentWaqf" options={{ headerShown: false }} />
        <Stack.Screen name="waqfCompleted" options={{ headerShown: false }} />
        <Stack.Screen name="waqfNftDetail" options={{ headerShown: false }} />
        <Stack.Screen name="completeKilatForm" options={{ headerShown: false }} />
        <Stack.Screen name="completeForm" options={{ headerShown: false }} />
        <Stack.Screen name="statistics" options={{ headerShown: false }} />
        <Stack.Screen name="logIn" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen 
          name="+not-found" 
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Not Found</Text>
            ),
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
