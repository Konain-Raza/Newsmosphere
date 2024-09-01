import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Header from '../src/components/Header';
import Headlines from '../src/components/Headlines';
import Explore from '../src/components/Explore';
import AllNews from '../src/components/AllNews';

const App = () => {
  const [category, setCategory] = useState('business');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ScrollView className="w-full h-max min-h-screen bg-slate-100 px-3">
      <Header onSearch={handleSearch} />
      <Headlines />
      <Explore onCategorySelect={handleCategorySelect} />
      <AllNews category={category} searchQuery={searchQuery} />
    </ScrollView>
  );
};

export default App;
