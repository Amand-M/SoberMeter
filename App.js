import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Components/accueil';
import Calcul from './Components/calcul';
import Configuration from './Components/Configuration';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={{ title: 'Accueil' }}
        />
        <Stack.Screen
          name="Calcul"
          component={Calcul}
          options={{ title: 'Calcul' }}
        />
        <Stack.Screen
          name="Configuration"
          component={Configuration}
          options={{ title: 'Configuration' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
