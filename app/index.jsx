import React, { useEffect } from 'react';
import { Link, SplashScreen, router, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from 'expo-font';

import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';


export default function App(){

  return(
    <GestureHandlerRootView>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className='w-[130px] h-[84px]'
              resizeMode='contain'
            />
            <Image
              source={images.cards}
              className="max-w--[380px] h-[380px]"
              resizeMode='contain'
            />
            <View className='relative mt-5'>
              <Text className='text-3xl text-white font-bold text-center'>
                  Discover Endless Possibilities with {' '}
                  <Text className="text-secondary-200">
                   Aora
                  </Text>
              </Text>
              <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-4 right-16"
              resizeMode='contain'></Image>
            </View>
            <Text
              className='text-sm font-pregular text-gray-100 mt-7 text-center'
            >
              Where creativity meets innovation:
              embark on a journey of limitless exploration with Aora
            </Text>
            {/* <TouchableOpacity
    
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className={`text-primary font-psemibold text-lg`}>Hello</Text>
    </TouchableOpacity> */}
            <CustomButton
            title="Continue with Email"
            handlePress = {() => router.push('/sign-in')}
            containerStyles = "w-full mt-7"
              />
        
          </View>
        </ScrollView>

        <StatusBar backgroundColor='#161622' style='light'/>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
}