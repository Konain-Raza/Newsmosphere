import {View, Text, FlatList, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadlineCard from './HeadlineCard';

const Headlines = ({apiKey}) => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHeadlines();
  },[]);

  const getHeadlines = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?country=pk&apikey=${apiKey}&language=en`,
      );
      const data = await response.json();
      setHeadlines(data.results || []);
    } catch (error) {
      Alert.alert('Failed to fetch headlines', error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="w-full h-[50vh] my-2">
      <Text className="text-3xl text-black font-gilroyBold px-4 mt-5" >
      Highlights 📣
      </Text>
      <FlatList
        ListEmptyComponent={
          !loading && (
            <View className="w-full flex px-8 items-center justify-center ">
              <View className="w-80 bg-white rounded-3xl shadow-lg border h-[80%] border-gray-300 p-5">
                <Image
                  source={require('../assets/images/no-headline.png')} // Replace with your local image path
                  className="w-28 h-28 mx-auto mb-1"
                />
                <Text className="text-center text-xl font-gilroyBold text-gray-800 mb-2">
                  Oops! No Headlines Here{'\n'}
                  <Text className="text-base font-gilroy text-gray-600">
                    Out of headlines for now. 🗞️ Fresh news is brewing, so check
                    back soon!
                  </Text>
                </Text>
              </View>
            </View>
          )
        }
        data={headlines}
        horizontal={true}
        renderItem={({item}) => <HeadlineCard headline={item} />}
        keyExtractor={item => item.article_id.toString()}
        onRefresh={getHeadlines}
        refreshing={loading}
      />
    </View>
  );
};

export default Headlines;
