import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer theme = {{colors:{background: "transparent"}}}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name = 'home' component={Home}/>
        <Stack.Screen name = 'signin' component={SignIn}/>
        <Stack.Screen name = 'signup' component={SignUp}/>
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
