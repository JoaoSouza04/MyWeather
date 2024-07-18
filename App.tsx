import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Weather from './components/Weather'
import Home from './components/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}