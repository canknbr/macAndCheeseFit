import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
const Home = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 flex bg-white space-y-5">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="text-neutral-700 font-bold"
            style={{
              fontSize: hp(4),
            }}>
            READY TO
          </Text>
          <Text
            className="text-rose-700 font-bold"
            style={{
              fontSize: hp(4),
            }}>
            WORKOUT
          </Text>
        </View>
        <Image
          source={require("../assets/images/can.jpeg")}
          className="rounded-full h-16 w-16"
        />
      </View>
      <View>
        <ImageSlider />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
