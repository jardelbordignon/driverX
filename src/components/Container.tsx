import React from 'react'
import { View } from 'react-native'

import theme from '../styles/theme.json'

interface Props {
  flex?: number
  row?: boolean
  justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-evenly'
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  padding?: number
  paddingH?: number
  paddingV?: number
  width?: number | string 
  height?: number | string 
  position?: 'relative' | 'absolute'
  top?: number
  zIndex?: number
  color?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'black' | 'muted' | 'muted50'
  children: React.ReactNode
}

export default function Container(props: Props) {

  const { align, color, flex, height, justify, padding, paddingH, paddingV, position, row, top, width, zIndex } = props

  return (
    <View style={{
      flex: flex || 0,
      flexDirection: row ? 'row' : 'column',
      justifyContent: justify || 'center',
      alignItems: align || 'center',
      paddingVertical: paddingV || padding || 0,
      paddingHorizontal: paddingH || padding || 0,
      width: '100%',
      maxWidth: width || '100%',
      height: height || 'auto',
      position: position || 'relative',
      top: top || 0,
      zIndex: zIndex || 1,
      backgroundColor: color ? theme.colors[color] : 'transparent'
    }}>

      { props.children }

    </View>
  )
}

