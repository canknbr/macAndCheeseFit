import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <Image
        source={require("../assets/images/welcome.png")}
        className="w-full h-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{
          width: wp(100),
          height: hp(70),
        }}
        start={{
          x: 0.5,
          y: 0,
        }}
        end={{
          x: 0.5,
          y: 0.8,
        }}
        className="flex justify-end space-y-8 pb-12">
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center">
          <Text
            style={{
              fontSize: hp(4),
            }}
            className="text-white font-semibold">
            Best
            <Text className="text-rose-700 font-semibold">Workouts</Text>
          </Text>
          <Text
            className="text-neutral-100 font-semibold"
            style={{ fontSize: hp(3) }}>
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            className="bg-rose-700 flex items-center justify-center mx-auto w-[70%] rounded-3xl px-4 py-3 border-neutral-100 border">
            <Text
              className="text-neutral-100 font-medium"
              style={{
                fontSize: hp(2),
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
