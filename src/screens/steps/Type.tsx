import React from 'react'
import { Image } from 'react-native'

import { Box, Btn, BtnTxt, Title, SubTitle, PickerButton } from '@src/styles'

import car from '@src/assets/car.png' 
import hand from '@src/assets/hand.png' 

export default function Type() {
  return (
    <Box padding={20} justify='flex-start'>

      <Box align='flex-start' height={40} top={10}>
        <Title>Passageiro ou motorista?</Title>
        <SubTitle>Selecione qual será sua função no DriverX</SubTitle>
      </Box>

      <Box>
        <PickerButton active>
          <Image source={car} />
          <Title>Motorista</Title>
        </PickerButton>
        
        <PickerButton>
          <Image source={hand} />
          <Title>Passageiro</Title>
        </PickerButton>
      </Box>

      <Box align='flex-end' height={70}>
        <Btn>
          <BtnTxt>Próximo Passo</BtnTxt>
        </Btn>
      </Box>

    </Box>
  )
}
