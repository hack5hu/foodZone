import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/Splash';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useAppSelector } from '../store/hooks';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { isLogin } = useAppSelector(state => state.global);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={isLogin ? 'MainStack' : 'AuthStack'}
        component={isLogin ? MainStack : AuthStack}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
