import React from 'react'
import {Image} from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

import {Box, Btn, BtnTxt} from '@src/styles'

import logo from '@src/assets/driverX.png'
import backgroundImg from '@src/assets/background_car.png'

export default function SignIn() {
  return (
    <Box background="info50" justify="flex-end">
      <Box
        justify="space-around"
        padding={20}
        position="absolute"
        height={330}
        zIndex={9}
      >
        <Image source={logo} style={{marginVertical: 30}} />

        <Btn background="info">
          <BtnTxt color="light">
            <MCI name='facebook' size={20} /> Fazer login com Facebook
          </BtnTxt>
        </Btn>
        <Btn background="light">
          <BtnTxt>
            <MCI name='google' size={20} /> Fazer login com Google
          </BtnTxt>
        </Btn>
      </Box>

      <Image source={backgroundImg} />
    </Box>
  )
}
