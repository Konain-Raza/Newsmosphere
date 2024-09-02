import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import NewsCard from './NewsCard';

const AllNews = ({category, apiKey}) => {
  const [news, setNews] = useState([]); // Ensure it's always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    if (category) {
      getNews();
    }
  }, [category]);

  const getNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=en`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('API rate limit exceeded or other error');
      }

      const data = await response.json();

      setNews(Array.isArray(data.results) ? data.results : []);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setError('API rate limit exceeded. Please try again later.');
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="w-full bg-slate-100 px-4 pt-5 pb-10">
      {error ? (
        <View className="w-full bg-white h-36 rounded-3xl mx-auto px-3 flex-row mb-4 shadow-lg border justify-center items-center border-gray-200">
          <View className="w-[75%] h-full ml-6 flex justify-center">
            <Text className="text-gray-800 text-xl font-gilroyBold ">
              Whoops! News on Vacation
            </Text>
            <Text className="text-gray-600 text-sm">
              It seems our news is taking a break. 🗞️ We promise it’ll be back
              soon, so hang tight and check back later!
            </Text>
          </View>
          <View className="w-[25%] h-full flex-row  items-center">
            <Image
              source={require('../assets/images/wait-icon.png')} // Replace with your local image path
              className="w-20 h-20 object-cover"
              resizeMode="contain"
            />
          </View>
        </View>
      ) : news.length === 0 ? (
        <Text className="text-3xl text-black text-center">No Items</Text>
      ) : (
        news.map(item => <NewsCard key={item.link} news={item} />)
      )}
    </View>
  );
};

export default AllNews;
