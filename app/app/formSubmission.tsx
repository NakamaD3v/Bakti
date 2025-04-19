import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#00C4A1] pt-12">
      <View className="flex-1 bg-white rounded-t-3xl items-center justify-center px-6">
        <View className="w-20 h-20 bg-[#00C4A1] rounded-full items-center justify-center mb-6">
          {/* ✅ Checkmark Icon */}
          <Text className="text-white text-4xl">✔️</Text>
        </View>

        <Text className="text-center text-lg font-semibold text-black mb-2">
          Your fundraising application is being processed
        </Text>

        <Text className="text-center text-sm text-gray-500 mb-10">
          We will notify you when there is an update on the status of your application
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-[#00C4A1] rounded-full px-8 py-3"
        >
          <Text className="text-white text-base font-medium">Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
