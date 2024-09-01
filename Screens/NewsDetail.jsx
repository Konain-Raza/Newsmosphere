import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
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
    <ScrollView className="w-full h-full bg-white">
      <ImageBackground
        className="w-full h-[50vh] overflow-hidden"
        imageStyle={{ resizeMode: 'cover' }}
        source={{ uri: news.image_url || 'https://via.placeholder.com/150' }}
      >
        
      </ImageBackground>
      
      <View className="p-4 justify-center items-center rounded-3xl ">
          <Text className="text-sm text-white px-4 py-2 rounded-3xl bg-blue-600 ">
            {news.category[0] || news.category || 'No Category'}
          </Text>

        
          {news.creator??<Text className="text-black text-sm mt-4">{news.creator }</Text>}
        <Text className="text-xl text-black font-bold py-2">{news.title || 'Title not available'}</Text>
        <Text className="text-lg text-black mt-2">{news.description}</Text>

        <View className="flex-row items-center mt-4 w-full">
          <Image
            className="w-12 h-12 object-cover mr-2"
            source={{ uri: news.source_icon || 'https://i.bytvi.com/domain_icons/tuoitre.png' }}
          />
          <Text className="text-lg text-black">{news.source_name || 'Source not available'}</Text>
        </View>

        <TouchableOpacity 
          onPress={openArticle}
          className="bg-blue-600 p-4 rounded-full mt-8 w-[90%]"
          activeOpacity={0.7}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Read Full Article
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;
