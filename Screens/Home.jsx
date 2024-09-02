import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Headlines from '../src/components/Headlines';
import Explore from '../src/components/Explore';
import AllNews from '../src/components/AllNews';
import Splash from './Splash';

const App = () => {
  const [category, setCategory] = useState('business');
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = 'pub_5245197b2bd1b6ecd3a8ba6a4fc98b2901f69';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed
  
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  

  const handleCategorySelect = selectedCategory => {
    setCategory(selectedCategory);
  };

  if (isLoading) {
    return <Splash />;
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F8F8F8' }}
      className="px-1 bg-white"
    >
      <Headlines apiKey={apiKey} />
      <Explore onCategorySelect={handleCategorySelect} />
      <AllNews apiKey={apiKey} category={category} setCategory={setCategory}/>
    </ScrollView>
  );
};

export default App;
