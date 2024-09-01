import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

const Explore = ({onCategorySelect}) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: 'Business',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661301087289-a9067c2f933f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzc2luZXNzfGVufDB8fDB8fHww',
    },
    {
      name: 'Entertainment',
      imageUrl: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    },
    {
      name: 'Environment',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
    {
      name: 'Food',
      imageUrl:
        'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Health',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1674499074438-8f611a3569f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Politics',
      imageUrl:
        'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Science',
      imageUrl:
        'https://images.unsplash.com/photo-1698808342955-500cb9b9a25e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZSUyMGFuZCUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a',
    },
    {
      name: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },

    {
      name: 'World',
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ybGR8ZW58MHx8MHx8fDA%3D',
    },
  ]);

  return (
    <View className="w-full h-[20vh]  flex">
      <Text className="text-2xl text-black px-4 pb-2">Explore</Text>

      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onCategorySelect(item)}>
              <ImageBackground
                className="w-28 h-28  rounded-full overflow-hidden ml-3 items-center justify-center flex-row"
                source={{
                  uri:
                    item.imageUrl ||
                    'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-color-tennis-sport-advertising-background-backgroundmotionwork-outtennistreeshand-paintedfreshhouses-image_75815.jpg',
                }}>
                <Text className="text-white text-md font-bold">
                  {item.name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Explore;
