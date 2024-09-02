import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeadlineCard = ({headline}) => {
  const navigation = useNavigation();
  const placeholderImage = require("../assets/images/icon-150.png");

  const imageSource = headline.image_url
    ? { uri: headline.image_url }
    : placeholderImage;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsDetail', {news: headline});
      }}>
    <View className="w-80 mx-auto rounded-3xl bg-white h-max my-4 overflow-hidden ml-3 shadow-xl">

        <Image
          className="w-full h-[60%] rounded-3xl object-cover"
          resizeMode="cover"
          source={imageSource}
        />
        <View className="w-full py-2 px-5  h-[40%] ">
          <View className="w-full flex-row justify-between items-center">
            <Text className="text-sm text-black font-gilroyBold">
              {headline.trendingNo || 'Trending 🔥'}
            </Text>
            <Text className="text-sm text-gray-500  font-gilroyBold">
            {headline.pubDate ? new Date(headline.pubDate).toLocaleDateString() : 'Date not available'}

            </Text>
          </View>
          <Text className="text-xl text-black font-gilroyBold">
            {headline.title.slice(0, 50) + '...' || 'Title not available'}
          </Text>
          <View className="flex-row items-center ">
            <Image
              className="w-8 h-8 object-cover rounded-full"
              source={{
                uri:
                  headline.source_icon ||
                  'https://i.bytvi.com/domain_icons/tuoitre.png',
              }}
            />
            <Text className="text-md text-black ml-2 font-gilroyBold">
              {headline.source_name || 'Author not available'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeadlineCard;
