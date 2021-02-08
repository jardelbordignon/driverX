import React from 'react'
import {Image} from 'react-native'

import {Box, Btn, BtnTxt} from '@src/styles'

import logo from '@src/assets/driverX.png'
import backgroud from '@src/assets/backgroud_car.png'

export default function SignIn() {
  return (
    <Box backgroud="info50" justify="flex-end">
      <Box
        justify="space-around"
        padding={20}
        position="absolute"
        height={330}
        zIndex={9}
      >
        <Image source={logo} style={{marginVertical: 30}} />

        <Btn backgroud="info">
          <BtnTxt color="light">Fazer login com Facebook</BtnTxt>
        </Btn>
        <Btn backgroud="light">
          <BtnTxt>Fazer login com Facebook</BtnTxt>
        </Btn>
      </Box>

      {/* <Container
        justify='space-around'
        position='absolute'
        height={300}
        top={0}
        zIndex={9}
      >
        <Image source={logo} style={{marginTop: 60, marginBottom: 20}} />

        <CustomButton background='info' color='light'>
          Fazer login com Facebook
        </CustomButton>

        <CustomButton background='light'>
          Fazer login com Google
        </CustomButton>

      </Container> */}

      <Image source={backgroud} />
    </Box>
  )
}
