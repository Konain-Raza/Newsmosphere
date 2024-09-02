import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NewsCard = ({news}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsDetail', {news: news});
      }}>
      <View className="w-full bg-white h-36 rounded-3xl mx-auto flex-row mb-4 ">
        <View className="w-[65%] h-full p-4 flex gap-1">
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-sm text-black font-gilroy">
              {news?.creator
                ? `${news.creator.slice(0, 10)}${
                    news.creator.length > 10 ? '...' : ''
                  }`
                : 'Newsmosphere'}
            </Text>
          </View>
          <Text className="text-xl text-black mt-1 w-full font-gilroyBold">
            {news.title.slice(0, 20) + '...' || 'Title not available'}
          </Text>
          <View className="flex-row items-center ">
            <Image
              className="w-8 h-8  rounded-full"
              source={{
                uri:
                  news.source_icon ||
                  'https://i.bytvi.com/domain_icons/tuoitre.png',
              }}
            />
            <Text className="text-md text-black ml-2 font-gilroy">
              {news.source_name || 'Konain'}
            </Text>
          </View>
        </View>
        {news.image_url ? (
          <Image
            resizeMode="cover"
            source={{uri: news.image_url}}
            className="w-[35%] h-full object-cover rounded-3xl"
          />
        ) : (
          <Image
            resizeMode="contain"
            source={require('../assets/images/icon.png')}
            className="w-[35%] h-full object-cover rounded-3xl"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
