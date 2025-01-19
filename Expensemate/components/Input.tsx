import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { InputProps } from "@/types";
import { colors, radius, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const Input = (props: InputProps) => {
  return (
    <View
      style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon && props.icon}
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={colors.neutral900}
        ref={props.inputRef && props.inputRef}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: verticalScale(50),
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral800,
    borderCurve : "continuous",
    borderRadius: radius._17,
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
  },
  input: {
    flex: 1,
    fontSize: verticalScale(16),
    color: colors.white,
    
  },
});
