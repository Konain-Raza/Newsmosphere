import {View, Text, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeadlineCard from './HeadlineCard';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    setLoading(true);
    try {
      const request = await fetch(
        'https://newsdata.io/api/1/latest?country=pk&apikey=pub_523219571df3c76e9320df252476066d90698',
      );
      const response = await request.json();
      setHeadlines(response.results);
    } catch (error) {
      Alert.alert('Failed to fetch headlines:', error.toString());
    }
    setLoading(false);
  };

  return (
    <View className="w-full h-[50vh] flex">
      <Text className="text-2xl text-black px-4 ">Hot News</Text>
      <FlatList
        data={headlines}
        horizontal={true}
        renderItem={({item}) => <HeadlineCard headline={item} />}
        keyExtractor={item => item.article_id}
        onRefresh={getHeadlines}
        refreshing={loading}
      />
    </View>
  );
};

export default Headlines;
