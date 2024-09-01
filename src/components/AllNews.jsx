import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import NewsCard from './NewsCard';

const AllNews = ({ category, searchQuery }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      getNews();
    }
  }, [category, searchQuery]);

  const getNews = async () => {
    try {
      setLoading(true);
      
      // Construct the URL based on the presence of the search query
      const url = searchQuery 
        ? `https://newsdata.io/api/1/news?apikey=pub_523219571df3b76e9320df252476066d90698&q=${encodeURIComponent(searchQuery)}`
        : `https://newsdata.io/api/1/news?apikey=pub_523219571df3b76e9320df252476066d90698&category=${category}`;
      
      const request = await fetch(url);
      const response = await request.json();
      setNews(response.results || []);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView className="w-full h-max bg-slate-100 px-4 py-2">
      <Text className="text-2xl text-black font-bold mb-4">News for {category} {searchQuery}</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.link}
        renderItem={({ item }) => <NewsCard news={item} />}
      />
    </ScrollView>
  );
};

export default AllNews;
