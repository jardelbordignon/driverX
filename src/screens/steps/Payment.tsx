import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { CreditCardInput } from 'react-native-credit-card-input'

import { Box, Btn, BtnTxt, Title, SubTitle, Spacer } from '@src/styles'

export default function Payment() {
  const [btnVisible, setBtnVisible] = useState(false)

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
        <Title>Escolha como pagar</Title>
        <SubTitle>Preencha os dados do cartão de crédito</SubTitle>
      </Box>

      <Box>
        <Spacer height={50} />
        <CreditCardInput requiresName />
      </Box>

      { btnVisible &&
      <Box align='flex-end' height={70}>
        <Btn>
          <BtnTxt>Comece a usar</BtnTxt>
        </Btn>
      </Box>
      }

    </Box>
  )
}
