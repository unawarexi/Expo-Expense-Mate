import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

const index = () => {
  //------------- using react navigation ---------------------//
  //     const navigation = useNavigation();
  //   const route = useRoute();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (route.params?.user) {
  //         navigation.navigate('/welcome');  // Navigate to Home screen if 'user' is present
  //       } else {
  //         null
  //         // navigation.navigate('Auth');  // Navigate to Auth screen if 'user' is missing
  //       }
  //     }, 2000);
  //   }, [route.params?.user, navigation]);

  //------------- using expo router ---------------------//
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/welcome");
    }, 2000);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../assets/images/splashImage.png")}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },

  logo: {
    width: 200,
    height: 200,
    aspectRatio: 1,
  },
});
