import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import Button from '@/components/Button';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import BackButton from '@/components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you use vector-icons for icons
import { useRouter } from 'expo-router';

const Login = () => {
  // State to manage Input Fields
  const [isPasswordVisible, setPasswordVisible] = useState(false); 
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setisLoading] = useState(false)

  // Refs for email and password inputs
  const EmailRef = useRef("");
  const PasswordRef = useRef("");

  // Function to handle form submission
  const handleSubmit = () => { 
    if (EmailRef.current === "" || PasswordRef.current === "") {
      alert("Please fill in all fields");
      setisLoading(false);
      return;
    } else {
      try {
        setisLoading(true);
        alert("Good to go");
        // router.replace("/(app)/Home");
      } finally {
        setisLoading(false);
      }
    }

  };

  const router =  useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

       <View >
       <Typo size={28} fontWeight="600" style={styles.welcomeText}>
          <Text>Hey,</Text> <Text style={{color: colors.primary}}>Welcome</Text> Back!
        </Typo>
        <Typo size={12} color={colors.textLighter}>
          Keep track of your expenses effortlessly. Log in to get started!
        </Typo>
       </View>

        <View style={styles.form}>
          {/*--------------------- Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={emailFocus ? colors.primary : colors.neutral600}
              style={[
                styles.inputField,
                { borderColor: emailFocus ? colors.primary : colors.neutral800 },
              ]}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChangeText={(value) => (EmailRef.current = value) }
            />
            <Icon
              name="mail-outline"
              size={24}
              color={colors.neutral600}
              style={styles.icon}
            />
          </View>

          {/*----------------- Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={passwordFocus ? colors.primary : colors.neutral600}
              secureTextEntry={!isPasswordVisible}
              style={[
                styles.inputField,
                { borderColor: passwordFocus ? colors.primary : colors.neutral800 },
              ]}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChangeText={(value) => (PasswordRef.current = value) }
            />
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Icon
                name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color={colors.neutral600}
              />
            </TouchableOpacity>
          </View>

          {/*------------------- Forgot Password */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Typo style={styles.forgotPasswordText}>Forgot Password?</Typo>
          </TouchableOpacity>
        </View>

        {/*----------------------  Login Button */}
        <View>
          <Button loading = {isLoading} onPress={handleSubmit} style={{height: verticalScale(50), marginTop: verticalScale(40)}}>
            <Typo fontWeight="600" color={colors.neutral900}>Login</Typo>
          </Button>

          <TouchableOpacity onPress={() => router.navigate("/(auth)/Register")} style={styles.signUpPrompt}>
            <Typo style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text></Typo>
          </TouchableOpacity>
        </View>

        
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    backgroundColor: colors.neutral900,
  },
  welcomeText: {
    color: colors.white,
    textAlign: 'left',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
    display: 'flex',
  },
  form: {
    width: '100%',
    gap: spacingY._15,
    marginTop: verticalScale(40),
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  inputField: {
    backgroundColor: colors.neutral800,
    borderRadius: 8,
    paddingHorizontal: spacingX._15,
    paddingVertical: verticalScale(12),
    color: colors.white,
    fontSize: 16,
    height: verticalScale(50),
    borderWidth: 2,
  },
  icon: {
    position: 'absolute',
    right: spacingX._15,
    top: verticalScale(12),
  },
  passwordIcon: {
    position: 'absolute',
    right: spacingX._15,
    top: verticalScale(12),
  },
  forgotPassword: {
    marginTop: spacingY._10,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 14,
  },
  footer: {
    marginTop: verticalScale(40),
    alignItems: 'center',
  },
  signUpPrompt: {
    marginTop: verticalScale(20),
  },
  signUpText: {
    color: colors.white,
    fontSize: 14,
  },
  signUpLink: {
    color: colors.primary,
  },
});
