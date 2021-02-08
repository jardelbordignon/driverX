import React, {useState, useEffect, useRef} from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {useFocusEffect, useNavigation} from '@react-navigation/native'

import { Avatar, Box, Btn, BtnTxt, Bullet, Input, Map, PulseCicle, Spacer, SubTitle, Title, VerticalSeparator } from '@src/styles'
import useUserLocation from '@src/hooks/useUserLocation'

import mapMarker from '../assets/car.png'
import { PROVIDER_GOOGLE } from 'react-native-maps'
//import api from '../../services/api'

interface PropertyProps {
  id: number
  name: string
  latitude: number
  longitude: number
}

function onNavigationStateChangeHandler(e) {
  console.log(e)
}

export default function Home() {
  
  const nav = useNavigation()
  const userLocation = useUserLocation()

  const loadedUserLocation = userLocation.latitude !== 0

  if (!loadedUserLocation) return <Text>Carregando...</Text>
  // useEffect(() => {
  //   if (loadedUserLocation) {
  //     //api.get('/properties', {params: userLocation}).then(res => setProperties(res.data))
  //   }
  // }, [userLocation])

  // P = passageiro e M = motorista
  const type:('P'|'M') = 'M'
  // S = SEN CORRIDA, I = INFORMAÇÕES, P = PESQUISA, C = CORRIDA
  const status:('S'|'I'|'P'|'C') = 'C'

  return (
    <Box>
      <Map 
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={{
          // latitude: -28.307828,
          // longitude: -52.796331,
          ...userLocation,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        disabled={status === 'P'}
      />

      <Box
        //bg='info'
        position='absolute'
        justify='space-between'
        align='flex-start'
        padding={20}
        zIndex={999}
        pointerEvents='box-none' // permite acesso ao componente de baixo onde ele estiver visível
        style={{height: '100%'}}>

        {/* Sem corrida axibe o Avatar */}
        { status === 'S' &&
          <Box height={100} justify='flex-start' align={'flex-start'}>
            <TouchableOpacity>
              <Avatar source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
            </TouchableOpacity>
          </Box>
        }

        {/* Com corrida axibe os endereços */}
        { status !== 'S' &&
          <Box height={110} bg='light' justify='flex-end'>
            <Spacer />
            <Box row justify='flex-start'>
              <Bullet />
              <SubTitle>Endereço completo de embarque</SubTitle>
            </Box>
            <Box row justify='flex-start'>
              <Bullet red />
              <SubTitle>Endereço completo de destino</SubTitle>
            </Box>
            <Spacer />
            { type === 'S' && 
              <Btn bg='dark' padding={10}>
                <BtnTxt color='light'>Toque para editar</BtnTxt>
              </Btn>
            }
          </Box>
        }

        {/* Passageiro Procurando corrida */}
        { status === 'P' && type === 'P' &&
          <Box>
            <PulseCicle
              // numPulses={5}
              // diameter={400}
              // speed={20}
              // duration={2000}
            />
          </Box>
        }

        <Box
          bg='light'
          elevation={50}
          height={150}>
 
          { type === 'P' && status === 'S' && // Passageiro Sem corrida
            <Box
              justify='flex-end'
              align='flex-start'
              padding={20}>

              <SubTitle>Olá, Ana da Silva</SubTitle>
              <Title>Para onde você quer ir?</Title>
              <Spacer />
              <Input placeholder='Procure um destino' />
            </Box>
          }

          {/* Passageiro Informação da corrida */}
          { type === 'P' && (status === 'I' || status === 'P') &&
            <Box
              justify='flex-end'
              align='flex-start'>

              <Box>
                <SubTitle>DriverX Convencional</SubTitle>
              </Box>

              <Box row justify='space-around' height={30}>
                <Title>R$ 15,25</Title>
                <VerticalSeparator />
                <Title>5 min</Title>
              </Box>

              <Spacer />

              <Btn bg={ status === 'P' ? 'muted' : 'primary' }>
                <BtnTxt>
                  { status === 'P' ? 'Cancelar' : 'Chamar' } DriverX
                </BtnTxt>
              </Btn>
            </Box>
          }

          {/* Passageiro em Corrida */}
          { status === 'P' && type === 'C' &&
            <Box
              border='primary'
              justify='flex-end'
              align='flex-start'>
              <Box row padding={15}>
                <Avatar small source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
                <Spacer width='10px' />
                <Box align='flex-start'>
                  <SubTitle bold>Jardel Bordignon</SubTitle>
                  <SubTitle>Fiat 147 Branco ABCD-1B34</SubTitle>
                </Box>
                <VerticalSeparator />
                <Box align='flex-end' width='100px'>
                  <Title>R$ 15,25</Title>
                  <SubTitle color='primary'>Aprox. 5 min</SubTitle>
                </Box>
              </Box>
              <Btn bg={'muted'}>
                <BtnTxt>
                  Cancelar Corrida
                </BtnTxt>
              </Btn>
            </Box>
          }

          {/* Motorista Sem Corrida */}
          { type === 'M' && status === 'S' &&
            <Box padding={20}>
              <SubTitle>Olá, Ana da Silva</SubTitle>
              <Title>Nenhuma solicitação</Title>
            </Box>
          }

          {/* Motorista Em Corrida */}
          { type === 'M' && status === 'C' &&
            <Box border='primary' justify='flex-end' align='flex-start'>
              <Box row padding={15}>
                <Avatar small source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
                <Spacer width='10px' />
                <Box align='flex-start'>
                  <SubTitle bold>Ana da Silva</SubTitle>
                  <SubTitle>Embarque em aprox. 2 km</SubTitle>
                </Box>
                <VerticalSeparator />
                <Box align='flex-end' width='100px'>
                  <Title>R$ 15,25</Title>
                  <SubTitle color='primary'>Aprox. 5 min</SubTitle>
                </Box>
              </Box>
              <Btn>
                <BtnTxt>Aceitar Corrida</BtnTxt>
              </Btn>
            </Box>
          }
          
        </Box>
      </Box>

    </Box>
  )
}
