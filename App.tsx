import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Preload from './src/screens/Preload';
import Home from './src/screens/Home';


type RootStackParamList = {
  Preload: string;
  Home: string;
  Search: string;
}



const Stack = createNativeStackNavigator()


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Preload'>
        <Stack.Screen 
          name='Preload'
          component={Preload}
          options={{
            headerShown: false
          }}
         
        
        />
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
          headerShown: false,
          
          
          
          }}
        />



      </Stack.Navigator>
     
     
    </NavigationContainer>
  );
}