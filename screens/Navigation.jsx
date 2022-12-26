    import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Scanner } from './Scanner';
import { HomeScreen } from './Home';
import { Plan } from './Plan';

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
        <Stack.Screen name="Scanner" component={Scanner} options={{ title: 'Cканер' }} />
        <Stack.Screen name="Plan" component={Plan} options={{ title: 'Локация' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};