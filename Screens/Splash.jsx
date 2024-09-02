import React from 'react';
import { View, Text, Image, Animated } from 'react-native';

const icon = require('../src/assets/images/icon.png');

const Splash = () => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animation]);

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2], // Adjust the scale values as needed
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1], // Adjust the opacity values as needed
  });

  return (
    <View className="flex-1 justify-between bg-white p-5">
      <View className="flex-1 items-center justify-center">
        <Animated.View style={{ transform: [{ scale }] }}>
          <Image source={icon} className="w-40 h-40 mb-6" resizeMode="contain" />
        </Animated.View>
        <Text className="text-3xl font-gilroyBold text-black text-center mb-3">
          Buckle Up! 🌟
        </Text>
        <Text className="text-lg text-gray-700 text-center px-2 mb-4 font-gilroyBold">
          Newsmosphere is brewing the hottest headlines faster than a
          caffeinated squirrel on roller skates! 🐿️☕️
        
        </Text>
      </View>
      <View className="pb-5">
      <Text className="text-lg font-gilroyBold text-gray-500 text-center bottom-0">
        Made with ❤️ by Konain Raza
      </Text>
      </View>
    </View>
  );
};

export default Splash;
