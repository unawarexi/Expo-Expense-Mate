import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { CustomButtonProps } from '@/types';
import { colors, radius } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import Loading from './Loading';

const Button = ({ style, onPress, loading = false, children }: CustomButtonProps) => {
    if(loading) {
        return (
            <View style={[styles.button, style, {backgroundColor: "transparent"}]}>
                <Loading />
            </View>
        )
    }
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}> 
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 24,
    borderRadius: radius._17,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(32),
  },
});
