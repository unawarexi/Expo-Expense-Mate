import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import { colors, radius } from '@/constants/theme'

const BackButton = ({style, iconSize = 26} : BackButtonProps) => {
    const router = useRouter()
  return (
    <TouchableOpacity onPress = {() => router.back()} style={[styles.button, style]}>
      <CaretLeft size={verticalScale(iconSize)} color = {colors.white} weight='bold' />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button :  {
        padding: 10,
        backgroundColor: colors.neutral600,
        borderRadius: radius._17,
        borderCurve: "continuous",
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginTop: verticalScale(10),
    }
})