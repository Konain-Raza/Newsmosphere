import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Header = () => {
  return (
    <View className="flex flex-row items-center justify-between w-full p-4 shadow-lg">
      <TouchableOpacity className="flex items-center">
        <Image
          source={require('../assets/images/icon.png')} // Replace with your online image URL
          style={{width: 40, height: 40, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Text className="text-2xl font-gilroyBold text-gray-800">
        Newsmosphere
      </Text>
      <View className="w-8 h-8" />
    </View>
  );
};

export default Header;
