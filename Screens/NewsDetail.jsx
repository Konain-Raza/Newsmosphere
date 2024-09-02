import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const NewsDetail = () => {
  const route = useRoute();
  const { news } = route.params;

  const openArticle = async () => {
    const url = news.link || 'https://example.com';
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <ImageBackground
        className="w-full h-[50vh] bg-cover bg-center"
        imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
        source={news.image_url ? { uri: news.image_url } : require('../src/assets/images/icon.png')}

      >
        {/* Image Background */}
      </ImageBackground>

      <View className="p-6 bg-white rounded-[30px] border border-gray-200 shadow-lg mx-1 -mt-16">
        <Text className="text-lg text-blue-600 px-4 py-2 rounded-full bg-blue-100 mx-auto font-gilroyBold">
          {news.category[0] || news.category || 'No Category'}
        </Text>

        {news.creator && (
          <Text className="text-sm text-gray-700 mt-4 font-gilroyBold">
            {news.creator}
          </Text>
        )}

        <Text className="text-2xl text-gray-800 font-gilroyBold py-2">
          {news.title || 'Title not available'}
        </Text>

        <Text className="text-lg text-gray-700 mt-2 font-gilroy">
          {news.description}
        </Text>

        <View className="flex-row items-center mt-4">
          <Image
            className="w-12 h-12 object-cover rounded-full border border-gray-300"
            source={{ uri: news.source_icon || 'https://i.bytvi.com/domain_icons/tuoitre.png' }}
          />
          <Text className="text-lg text-gray-800 ml-2 font-gilroyBold">
            {news.source_name || 'Source not available'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={openArticle}
          className="bg-blue-500 p-4 rounded-full mt-6 mx-auto w-full"
          activeOpacity={0.7}
        >
          <Text className="text-white text-center text-lg font-gilroyBold">
          Uncover the Details 🔍
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;
