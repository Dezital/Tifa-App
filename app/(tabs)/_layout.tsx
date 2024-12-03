// AppLayout.tsx
import { Redirect, Tabs } from "expo-router"
import React, { useEffect } from 'react';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useSession } from '../../ctx';
import LoadingScreen from '@/components/LoadingScreen';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {View} from 'react-native';


export default function AppLayout() {
  const { session, isLoading } = useSession();

  // Set status bar style on mount
  useEffect(() => {
    setStatusBarStyle('light');
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={{ backgroundColor: 'rgba(44, 44, 44, 1)', flex: 1}}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'rgba(47, 120, 245, 1)',
          tabBarStyle: {
            //borderTopLeftRadius: 50,
            //borderTopRightRadius: 50,
            backgroundColor: 'rgba(30, 32, 33, 1)',
            borderColor: 'rgba(30, 32, 33, 1)', 
            paddingTop: 12,
            paddingBottom: 13,
            paddingHorizontal: 15,
            height: 70,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home'} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="homework"
          options={{
            title: 'HomeWork',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'tennisball' : 'tennisball'} color={color} focused={focused} />
            ),
          }}
        />
      <Tabs.Screen
          name="training"
          options={{
            title: 'Training',
             tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'football' : 'football'} color={color} focused={focused} />
            ),
          }}
        />           
        <Tabs.Screen
          name="magezine"
          options={{
            title: 'Magezine',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'newspaper' : 'newspaper'} color={color} focused={focused} />
            ),
          }}
        />  
        <Tabs.Screen
          name="homeworklist/[id]"
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'newspaper' : 'newspaper'} color={color} focused={focused} />
            ),
          }}
        />  
        <Tabs.Screen
          name="traininglist/[id]"
          options={{
            tabBarItemStyle: { display: 'none' },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'newspaper' : 'newspaper'} color={color} focused={focused} />
            ),
          }}
        />  
      </Tabs>
      </View>
    </>
  );
}

