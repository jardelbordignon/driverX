import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
//import Feather from 'react-native-vector-icons/Feather'
import theme from '../styles/theme.json'

interface Props {
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  icon?: string
  color?:       'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  background?:  'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  borderColor?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  width?: number | string 
  height?: number | string
  paddingV?: number
  marginH?: number
  children: React.ReactNode
}

export default function CustomButton(
  {fontWeight, icon, color, background, borderColor, width, height, paddingV, marginH, children, ...rest}: Props) {

  const bgColor = background || 'primary'

  return (
    <TouchableOpacity style={{
      paddingVertical: paddingV || 15,
      width: width || '85%',
      backgroundColor: theme.colors[bgColor],
      borderColor: theme.colors[borderColor || bgColor],
      flexDirection: 'row',
      borderWidth: 1,
      }}
      {...rest}>

      {icon &&
        <View style={styles.iconWrapper}>
          {/* <Feather name={icon} size={22} color={color} style={styles.icon} /> */}
        </View>
      }
      
      <View style={styles.btnTextWrapper}>
        <Text style={[styles.btnText, {color: theme.colors[color || 'dark']}, icon ? {marginRight: 30} : {}]}>{ children }</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: { fontWeight: 'bold' },
  btnTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 16
  }
})
