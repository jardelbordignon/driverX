import React, {useState, useEffect} from 'react'
import { Keyboard } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

import { Box, Btn, BtnTxt, Title, SubTitle, Input, Spacer } from '@src/styles'

export default function Car() {
  const [btnVisible, setBtnVisible] = useState(true)

  /**
   * Escondendo o Button quando abre o keyboard
   */
  useEffect(() => {
    //quando abrir o keyborad
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', () => setBtnVisible(false)
    )
    //quando fechar o keyborad
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', () => setBtnVisible(true)
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return (
    <Box padding={20} justify='flex-start'>

      <Box align='flex-start' height={40} top={10}>
        <Title><MCI name='car' size={20} /> Cadastre seu veículo</Title>
        <SubTitle>Preencha os campos abaixo</SubTitle>
      </Box>

      <Box justify='flex-start'>
        <Spacer height={60} />
        <Input placeholder='Placa do veículo' />
        <Spacer />
        <Input placeholder='Marca do veículo' />
        <Spacer />
        <Input placeholder='Modelo do veículo' />
        <Spacer />
        <Input placeholder='Cor do veículo' />
      </Box>

      { btnVisible && 
        <Box align='flex-end' height={70}>
          <Btn>
            <BtnTxt><MCI name='car-arrow-right' size={20} /> Começar a usar</BtnTxt>
          </Btn>
        </Box>
      }
    </Box>
  )
}
