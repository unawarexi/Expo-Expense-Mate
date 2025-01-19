import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/Button";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
} from "react-native-reanimated";
import { useRouter } from "expo-router";


const Welcome = () => {
  // Shared values for animations
  const fadeInImage = useSharedValue(0);
  const translateYImage = useSharedValue(50);
  const fadeInText = useSharedValue(0);
  const translateYText = useSharedValue(50);
  const fadeInButton = useSharedValue(0);
  const translateYButton = useSharedValue(50);

  // UseEffect to trigger animations
  useEffect(() => {
    // Animate image
    fadeInImage.value = withSpring(1, {
      damping: 10,
      stiffness: 80,
    });
    translateYImage.value = withSpring(0, {
      damping: 10,
      stiffness: 80,
    });

    // Animate text
    fadeInText.value = withSpring(1, {
      damping: 12,
      stiffness: 90,
    });
    translateYText.value = withSpring(0, {
      damping: 12,
      stiffness: 90,
    });

    // Animate button
    fadeInButton.value = withSpring(1, {
      damping: 14,
      stiffness: 100,
    });
    translateYButton.value = withSpring(0, {
      damping: 14,
      stiffness: 100,
    });
  }, []);

  // Animated styles
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInImage.value,
      transform: [{ translateY: translateYImage.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInText.value,
      transform: [{ translateY: translateYText.value }],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInButton.value,
      transform: [{ translateY: translateYButton.value }],
    };
  });

  const router = useRouter();



  return (
    <ScreenWrapper style={styles.container}>
      {/* Sign Up Button Positioned at Top Right */}
      <TouchableOpacity onPress={() => router.push("/(auth)/Login")} style={styles.signUpButton}>
        <Typo fontWeight={500} style={styles.signUpButtonText}>
          Sign Up
        </Typo>
      </TouchableOpacity>

      {/* Animated Welcome Image */}
      <Animated.View style={[styles.welcomeImage, animatedImageStyle]}>
        <Image
          source={require("../../assets/images/onboarding.png")}
          style={styles.image}
        />
      </Animated.View>

      {/* Animated Welcome Text */}
      <Animated.View style={animatedTextStyle}>
        <Typo size={20} fontWeight="600" style={styles.welcomeText}>
          Welcome to Expensemate
        </Typo>
      </Animated.View>

      {/* Footer with Animated Get Started Button */}
      <View style={styles.footer}>
        <Typo size={25} fontWeight="600" style={styles.footerHeading}>
          Take Control of Your Finances
        </Typo>
        <Text style={styles.footerSubtitle}>
          Finances must be arranged to secure your future and live stress-free.
        </Text>

        {/* Animated Button */}
        <Animated.View style={[animatedButtonStyle, styles.getStartedButton]}>
          <Button onPress={() =>  router.push("/(auth)/Register")} >
            <Typo fontWeight="600" color={colors.neutral900}>
              Get Started
            </Typo>
          </Button>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  signUpButton: {
    position: "absolute",
    top: spacingY._60,
    right: spacingX._20,
    backgroundColor: colors.primary,
    paddingHorizontal: spacingX._15,
    paddingVertical: spacingY._7,
    borderRadius: 30,
  },
  signUpButtonText: {
    color: colors.neutral900,
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    resizeMode: "contain",
    marginTop: verticalScale(100),
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: '#333',
    marginTop: verticalScale(30),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: verticalScale(40),
    backgroundColor: colors.neutral900,
    alignItems: "center",
    gap: spacingY._10,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.25,
    elevation: 10,
    shadowRadius: 10,
  },
  footerHeading: {
    color: "#fff",
    fontSize: 24,
  },
  footerSubtitle: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: spacingX._20,
    marginTop: spacingY._5,
  },
  getStartedButton: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(12),
    paddingHorizontal: spacingX._20,
    borderRadius: 20,
    marginTop: spacingY._10,
    alignItems: "center",
    width: '80%',
  },
});
