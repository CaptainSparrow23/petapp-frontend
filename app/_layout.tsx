import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './(auth)/signin';
import SignUp from './(auth)/signup';
import Home from './(tabs)/index';
import Profile from './(tabs)/profile';
import Settings from './(tabs)/settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#f5f5f5' },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function AuthNavigator({ onSignIn }: { onSignIn: () => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn">
        {(props) => (
          <SignIn
            {...props}
            onSignIn={onSignIn}
            onNavigateToSignUp={() => props.navigation.navigate('SignUp')}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {(props) => (
          <SignUp
            {...props}
            onSignUp={onSignIn}
            onNavigateToSignIn={() => props.navigation.navigate('SignIn')}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <TabNavigator />
      ) : (
        <AuthNavigator onSignIn={() => setIsSignedIn(true)} />
      )}
    </>
  );
}
