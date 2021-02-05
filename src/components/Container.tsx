import React from 'react'
import { View } from 'react-native'

import theme from '../styles/theme.json'

interface Props {
  flex?: number
  row?: boolean
  justify?: 'space-between' | 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-evenly'
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  padding?: number
  width?: string 
  height?: string 
  position?: 'relative' | 'absolute'
  top?: number
  zIndex?: number
  color?: string
  txtColor?: string
  children: React.ReactNode
}

export default function Container(props: Props) {

  const { align, color, flex, height, justify, padding, position, row, top, width, zIndex } = props

  return (
    <View style={{
      flex: flex || 1,
      flexDirection: row ? 'row' : 'column',
      justifyContent: justify || 'center',
      alignItems: align || 'center',
      padding: padding || 0,
      width: '100%',
      maxWidth: width || '100%',
      maxHeight: height ? height + 'px' : 'auto',
      position: position || 'relative',
      top: top || 0,
      zIndex: zIndex || 1,
      backgroundColor: color ? theme.colors[color] : 'transparent'
    }}>

      { props.children }

    </View>
  )
}

