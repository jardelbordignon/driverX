import React from 'react'
import { Image } from 'react-native'

import Container from '@src/components/Container'
import CustomButton from '@src/components/CustomButton'

import logo from '@src/assets/driverX.png' 
import backgroud from '@src/assets/backgroud_car.png' 

export default function SignIn() {
  return (
    <Container color='info50' justify="flex-end">

      <Container
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

      </Container>

      <Image source={backgroud} />
    </Container>
  )
}
