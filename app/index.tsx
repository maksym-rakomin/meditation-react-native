import {View, Text, ImageBackground, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'

import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className='flex-1'>
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className="flex-1"
      >
        <AppGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
          <SafeAreaView className='flex-1 px-5 mx-5 my-12 justify-between'>
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>

              <Text className="text-center text-white font-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton onPress={() => router.push('/nature-meditate')} title='Get Started'/>
            </View>

            <StatusBar barStyle="light-content"/>
          </SafeAreaView>
          {/*</LinearGradient>*/}
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App