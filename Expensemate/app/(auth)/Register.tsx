import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import Button from '@/components/Button';
import { colors, spacingX, spacingY, radius } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import Loading from '@/components/Loading';

const Register = () => {
   const [isLoading, setisLoading] = useState(false)
  
 
  //--------- password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

// state to handle form data 
const [formData, setFormData] = useState({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
});

// Function to handle form submission
const handleSubmit = () => { 
  // destructure form data
  const { firstname, lastname, email, password, confirmPassword } = formData;
  
  if (
    !firstname.trim() || 
    !lastname.trim() || 
    !email.trim() || 
    !password.trim() || 
    !confirmPassword.trim()
  ) {
    alert("Please fill in all fields");
    setisLoading(false);
    return;
  }

  try {
    setisLoading(true);
    <Loading />
    alert("Good to go");
    // Perform your form submission logic here, like API call or navigation
    // router.replace("/(app)/Home");
  } finally {
    setisLoading(false);
  }
};


  // state to handle checked box 
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };


   // state to handle active form field 
  const [isFocused, setIsFocused] = useState({
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  

  const handleFocus = (inputName: string) => {
    setIsFocused({
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      confirmPassword: false,
      [inputName]: true, // Set only the focused input as active
    });
  };
  

  const handleBlur = () => {
    setIsFocused({
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      confirmPassword: false, // Reset focus when input loses focus
      
    });
  };
  
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
      <View style = {{flexDirection: "column", alignItems: "flex-start"}}  >
       <Typo size={28} fontWeight="600" style={{ ...styles.headerText, flexDirection: "column" }}>
          <Text>Let's,</Text>   
        </Typo>
         <Typo size={28} fontWeight="600" style={styles.headerText}><Text  style={{ color: colors.primary }}>get you</Text> started!</Typo>
         <Typo size={10} color={colors.textLighter} style={{ marginTop: verticalScale(20) }}>
        Ready to master your finances? Create an account now and take control of your spending with ease. Your journey to smarter saving starts here!
        </Typo>
       </View>
       

    {/* ---------------- ROW FOR USER NAMES----------------- */}

        <View style={[styles.inputContainer, isFocused.firstname && styles.activeInput, {marginTop: verticalScale(20)}]}>
          <Icon name="person-outline" size={20} color={colors.neutral700} />
          <TextInput
            style={styles.input}
            placeholder={isFocused.firstname ? '' : 'Firstname'}
            placeholderTextColor={colors.neutral700}
            value={formData.firstname}
            onChangeText={(text) => setFormData({ ...formData, firstname: text })}
            onFocus={() => handleFocus('firstname')}
            onBlur={ handleBlur}
          />
          {isFocused.firstname && <Text style={styles.placeholderLabel}>First Name</Text>}
        </View>

          <View style={[styles.inputContainer, isFocused.lastname && styles.activeInput]}>
          <Icon name="person-outline" size={20} color={colors.neutral700} />
          <TextInput
            style={styles.input}
            placeholder={isFocused.lastname ? '' : 'Lastname'}
            placeholderTextColor={colors.neutral700}
            value={formData.lastname}
            onChangeText={(text) => setFormData({ ...formData, lastname: text })}
            onFocus={() => handleFocus('lastname')}
            onBlur={ handleBlur}
          />
          {isFocused.lastname && <Text style={styles.placeholderLabel}>Last Name</Text>}
        </View>

        {/*----------------------- Email Input */}
        <View style={[styles.inputContainer, isFocused.email && styles.activeInput]}>
          <Icon name="mail-outline" size={20} color={colors.neutral700} />
          <TextInput
            style={styles.input}
            placeholder={isFocused.email ? '' : 'Email'}
            placeholderTextColor={colors.neutral700}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            onFocus={() => handleFocus('email')}
            onBlur={ handleBlur}
          />
          {isFocused.email && <Text style={styles.placeholderLabel}>Email</Text>}
        </View>

        {/*-------------------------- Password Input */}
        <View style={[styles.inputContainer, isFocused.password && styles.activeInput]}>
          <Icon name="lock-closed-outline" size={20} color={colors.neutral700} />
          <TextInput
            style={styles.input}
            placeholder={isFocused.password ? '' : 'Password'}
            placeholderTextColor={colors.neutral700}
            secureTextEntry={!isPasswordVisible}
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            onFocus={() => handleFocus('password')}
            onBlur={ handleBlur}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color={colors.neutral700} />
          </TouchableOpacity>
          {isFocused.password && <Text style={styles.placeholderLabel}>Password</Text>}
        </View>

        {/*-------------------------------- Confirm Password Input */}
        <View style={[styles.inputContainer, isFocused.confirmPassword && styles.activeInput]}>
          <Icon name="lock-closed-outline" size={20} color={colors.neutral700} />
          <TextInput
           style={styles.input}
            placeholder={isFocused.confirmPassword ? '' : 'Confirm Password'}
            placeholderTextColor={colors.neutral700}
            secureTextEntry={!isPasswordVisible}
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={ handleBlur}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color={colors.neutral700} />
          </TouchableOpacity>
          {isFocused.confirmPassword && <Text style={styles.placeholderLabel}>Confirm Password</Text>}
        </View>

        {/*----------------------- Privacy Policy Agreement */}
        <View style={styles.privacyPolicyContainer}>
          <TouchableOpacity style={[styles.checkbox, isCheckboxChecked && styles.checkboxChecked]} onPress={toggleCheckbox}>
            {isCheckboxChecked && <Icon name="checkmark-outline" size={18} color={colors.white} />}
          </TouchableOpacity>
          <Text style={styles.privacyPolicyText}>
            I agree to the <Text style={styles.privacyPolicyLink}>Privacy Policy</Text>
          </Text>
        </View>

        {/*------------------------------- Register Button */}
        <Button onPress={handleSubmit} loading = {isLoading} style={styles.registerButton}>
          <Typo fontWeight="600" color={colors.neutral900}>Register</Typo>
        </Button>

        {/* -------------------------- Already have an account */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? <Pressable onPress={() => router.push("/(auth)/Login")}>
            <Text style={styles.footerLink}>Login</Text></Pressable></Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop: verticalScale(20),
    paddingHorizontal: spacingX._20,
    backgroundColor: colors.neutral900,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    color: colors.white,
    
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutral800,
    borderRadius: radius._10,
    borderWidth: 1,
    borderColor: colors.neutral800,
    paddingHorizontal: spacingX._15,
    marginBottom: spacingY._20,
    position: 'relative',
    height: verticalScale(50),
    
  },
  activeInput: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: spacingX._10
  },
  placeholderLabel: {
    position: 'absolute',
    top: -10,
    left: spacingX._15,
    backgroundColor: colors.neutral900,
    paddingHorizontal: spacingX._5,
    fontSize: 12,
    color: colors.primary,
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.neutral700,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacingX._10,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  privacyPolicyText: {
    color: colors.white,
  },
  privacyPolicyLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(12),
    borderRadius: radius._17,
    alignItems: 'center',
    height: verticalScale(50),
  },
  footer: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    textAlign : "justify"
    
    
  },
  footerText: {
    color: colors.neutral700,
    textAlign: "center",
    justifyContent: "center",
    
  },
  footerLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
    alignSelf : "center",
    fontWeight: "bold",
    paddingLeft : 5,
    
  },
});
