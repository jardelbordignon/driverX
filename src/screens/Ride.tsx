import React, {useState, useEffect} from 'react'
import { Keyboard } from 'react-native'

import { Box, Btn, BtnTxt, Title, SubTitle, Input, Spacer, AddressList, AddressItem } from '@src/styles'

export default function Ride() {
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

      <Box row height={50} justify='space-between'>
        <SubTitle>Voltar</SubTitle>
        <Title>Corrida</Title>
        <Box width='15%' />
      </Box>


      <Box>
        <Input placeholder='Embarque' />
        <Input placeholder='Destino' />
        <Spacer />
        <AddressList 
          data={Array.from({length: 20}, (v, i) => i+1)}
          renderItem={({item, index}) => (
            <AddressItem>
              <SubTitle bold>Parque Farroupilha</SubTitle>
              <SubTitle small>Porto Alegre/RS - BR</SubTitle>
            </AddressItem>
          )}
        />
      </Box>


      { btnVisible && 
        <Box align='flex-end' height={70}>
          <Btn>
            <BtnTxt>Começar a usar</BtnTxt>
          </Btn>
        </Box>
      }

    </Box>
  )
}
