import React from 'react';
import Home from './Screens/Home';
import NewsDetail from './Screens/NewsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
     
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide header on Home screen
        />
        
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            title: '', // No title
            headerStyle: {
              backgroundColor: 'white', 
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
           <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} // Hide header on Splash screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
