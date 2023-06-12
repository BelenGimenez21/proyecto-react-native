import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './views/HomeView';
import ListView from './views/ListView';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Navigator>
        <Screen name="Home" component={HomeView} options={{ title: 'Inicio' }} />
        <Screen name="List" component={ListView} options={{ title: 'Lista de Personajes' }} />
      </Navigator>
    </NavigationContainer>
  );
}
