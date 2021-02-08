import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
//import Feather from 'react-native-vector-icons/Feather'
import theme from '../styles/theme.json'

interface Props {
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  icon?: string
  color?:       'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  background?:  'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50' | 'primary-opacity'
  borderColor?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  borderWidth?: number
  width?: number | string 
  height?: number | string
  paddingV?: number
  marginH?: number
  marginV?: number
  children: React.ReactNode
  // All other props ...rest
  [x:string]: any;
}

export default function CustomButton({
  fontWeight,
  icon,
  color,
  background,
  borderColor,
  borderWidth,
  width,
  height,
  paddingV,
  marginH,
  marginV,
  children,
  ...rest
}: Props) {

  const bgColor = background || 'primary'

  return (
    <TouchableOpacity style={[
      {
        paddingVertical: paddingV || 15,
        width: width || '100%',
        height,
        marginHorizontal: marginH,
        marginVertical: marginV,
        backgroundColor: theme.colors[bgColor],
        borderColor: theme.colors[borderColor || bgColor],
        flexDirection: 'row',
        borderWidth: borderWidth || 1,
      },
      {...rest}
    ]}
      >

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
