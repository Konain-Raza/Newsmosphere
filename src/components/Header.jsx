import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
// import { SearchIcon } from 'react-native-heroicons/outline'; // Assuming you're using heroicons or any other icon package

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    onSearch(text); // Notify parent component about the search query
  };

  return (
    <View className='w-full h-[7vh] bg-blue-400 justify-between items-center flex-row px-4'>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearchChange}
        placeholder='Search...'
        className='flex-grow h-10 bg-white rounded-xl px-4 text-black'
      />
      {/* <SearchIcon className='w-6 h-6 text-white ml-2' /> */}
    </View>
  );
};

export default Header;
